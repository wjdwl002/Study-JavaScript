fs = require('fs')

fs.readdir('./3. Web2 - Node.js/data', function(error, filelist){
    console.log(filelist);
})