const http=require('http');
const path=require('path');
const fs=require('fs');
const mime=require('mime');
http.createServer(function (req,res) {
    var srcdir=path.join(__dirname,'src')    ;
    var filename=path.join(srcdir,req.url);
    fs.readFile(filename,function (err,data) {
    if (err) {
        fs.readFile('src/error.html',function (err,data) {
            res.end(data);
        })
    }
    else
        {
            res.setHeader('Content-Type',mime.getType(filename));
            res.end(data);
        }
    })
}).listen(8080,function () {
    console.log('listening:8080')
});