var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
 
function templateHTML(title, list, body){
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    <a href="/create">create</a>
    ${body}
  </body>
  </html>
  `;
}
function templateList(filelist){
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list+'</ul>';
  return list;
}
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){ //메인화면이면
      if(queryData.id === undefined){ //메인 중 메인이면
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = templateList(filelist);
          var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
          response.writeHead(200);
          response.end(template);
        });
      } else { //메인 중 id가 있는 화면이면
        fs.readdir('./data', function(error, filelist){
          fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
            var title = queryData.id;
            var list = templateList(filelist);
            var template = templateHTML(title, list, `
            <a href="/edit?id=${title}">edit</a>
            <form action="process_delete" method="post onsubmit="">
                <input type="hidden" name="id" value="${title}">
                <input type="submit" value="delete">
            </form>
            <h2>${title}</h2>
            ${description}`);
            response.writeHead(200);
            response.end(template);
          });
        });
      }
    } else if(pathname === '/create'){ //생성 기능
      fs.readdir('./data', function(error, filelist){
        var title = 'WEB - create';
        var list = templateList(filelist);
        var template = templateHTML(title, list, `
          <form action="http://localhost:3000/process_create" method="post">
            <p><input type="text" name="title" placeholder="title"></p>
            <p>
              <textarea name="description" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
        `);
        response.writeHead(200);
        response.end(template);
      });
    } else if(pathname === '/process_create'){ //생성 제출 후
        var body = '';
        request.on('data', function(data){ //데이터가 많을 때 -> 조각조각의 양들을 수신
            body += data;
        })
        request.on('end', function(){ //end(데이터 request가 끝났을 때)
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            fs.writeFile(`data/${title}`,description,'utf8',function(err){
                response.writeHead(302,{Location:`/?id=${title}`});
                response.end();
            })
        })
    } else if (pathname === '/edit'){
        fs.readdir('./data', function(error, filelist){
            fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
              var title = queryData.id;
              var list = templateList(filelist);
              var template = templateHTML(title, list, `
                <h2>${title} (EDIT)</h2>
                <form action="http://localhost:3000/process_edit" method="post">
                <p>
                <input type="hidden" name="prev_title" value="${title}">
                <input type="text" name="title" placeholder="title" value="${title}"></p>
                <p>
                <textarea name="description" placeholder="description">${description}</textarea>
                </p>
                <p>
                <input type="submit">
                </p>
                </form>`);
              response.writeHead(200);
              response.end(template);
            });
          });
    }else if(pathname === "/process_edit"){
        var body = '';
        request.on('data', function(data){
            body += data;
        })
        request.on('end', function(){ 
            var post = qs.parse(body);
            var id = post.prev_title;
            var title = post.title;
            var description = post.description;
            console.log(id);
            fs.rename(`data/${id}`, `data/${title}`,function(err){
                fs.writeFile(`data/${title}`, description, 'utf8',function(err){
                    if(err) throw err;
                    response.writeHead(302,{Location:`/?id=${title}`});
                    response.end();
                })
            })
        });
    } else if(pathname === "/process_delete"){
        var body = '';
        request.on('data', function(data){
            body += data;
        })
        request.on('end', function(){ 
            var post = qs.parse(body);
            var title = post.id;
            console.log(title);
            fs.unlink(`data/${title}`, function(error){
                response.writeHead(302,{Location:`/`});
                response.end();
            })
        })
    }
    else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);