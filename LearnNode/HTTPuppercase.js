var fs = require('fs');
var path = require('path');
var http = require('http');
var port = procces.argv[2];
var map = require('through2-map');

http.createServer((req,res) => {
    var dt;
    if(req.method == 'POST'){
        req.pipe(map(function(chunk){
            return chunk.toString()

        }));
    }
    
    // req.    
}).listen(port);