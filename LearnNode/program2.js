var fs = require('fs');
var filedir = process.argv[2];
var fileFomat = process.argv[3];
var path = require('path');


fs.readdir(filedir,function(err,files){
    files.forEach(element => {
        if(element.endsWith(`.${fileFomat}`)){
            console.log(element);
        }
    });

    //모범답안
    files.forEach(function(file){
        if(path.extname(file) === `.${fileFomat}`){
            console.log(file);
        }
        console.log(path.extname(file)) ;
    })
})