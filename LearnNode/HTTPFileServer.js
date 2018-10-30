var http = require('http');
var portnum = process.argv[2];
var fileloca = process.argv[3];
var fs = require('fs');

http.createServer(function(req,res){
    //writeHead는 뭐하는 애일까
    res.writeHead(200,{'content-type':'text/plain'});
    // var data = fs.createReadStream(fileloca);
    // res.write(data);
    // 흠.. 위에는 웨 안돼지?
    fs.createReadStream(fileloca).pipe(res);

    
    

}).listen(portnum);


