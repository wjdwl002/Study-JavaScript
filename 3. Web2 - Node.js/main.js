//메인페이지 따로 만들기//

var http = require('http');
var fs = require('fs');
var url = require('url');

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
    `
}

function templateList(fileList){
    var list = '<ul>';
    var i = 0;
    while (i<fileList.length){
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        i = i + 1;
    }
    list = list + '<ul>'
    return list;
}

var app = http.createServer(function(request, response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    
    if(pathname === '/'){ //main page이면
        if(queryData.id === undefined){ //id
            fs.readdir('./3. Web2 - Node.js/data','utf8',function(err, description){
                var title = 'Welcome';
                var description = 'Hello, Node.js'
                var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
                response.writeHead(200);
                response.end(template);
            });
        } else { //
            fs.readdir('./3. Web2 - Node.js/data', function(error, filelist){
                fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
                    var title = queryData.id;
                    var list = templateList(filelist);
                    var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
                    response.writeHead(200);
                    response.end(template);
                });
            });
        }
    }else if (pathname === '/create'){ //create 페이지면
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
                `
            );
            response.writeHead(200);
            response.end(template);
        });
    } else {
        response.writeHead(404);
        response.end('NOT FOUND')
    }
});
app.listen(304);