var url1 = process.argv[2];
var url3 = process.argv[3];
var url2 = process.argv[4];

var fs = require('fs');
var http = require('http');
var bl = require('bl');

for(var i = 2 ; i < 4 ; i++){
    http.get(process.argv[i],function(response){
        response.setEncoding('utf8');
        var texts = '';
        // console.log(response);
    
        response.pipe(bl(function(err,data){
            texts += data.toString();
            console.log(texts);
            
            fs.writeFile(`file${i-1}`,texts,function(err){    
            
            })

        }))
        response.on("error",console.error);
    })    
}