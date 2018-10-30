var filedir = process.argv[2];
var fileFomat = process.argv[3];
var mymodule = require('./modu.js');

mymodule(filedir,fileFomat,function(err,list){
    if(err){
        return console.error('There is an ERROR !! :', err)
    }
    // console.log(list);
    list.forEach(function(file){
        console.log(file);
    })
})