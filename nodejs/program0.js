var url1 = process.argv[2];
var url3 = process.argv[3];
var url2 = process.argv[4];
var async = require('async');

var fs = require('fs');
var http = require('http');
var bl = require('bl');

http.get(url1,function(response){
    response.setEncoding('utf8');
    var texts = '';
    // console.log(response);

    response.pipe(bl(function(err,data){
        texts += data.toString();
        console.log(texts);
        fs.writeFile('file1',texts,function(err){
        
        })
    }))

    
    response.on("error",console.error);
})

http.get(url2,function(response){
    response.setEncoding('utf8');
    var texts = '';
    // console.log(response);

    response.pipe(bl(function(err,data){
        texts += data.toString();
        console.log(texts);
        fs.writeFile('file2',texts,function(err){
        
        })
    }))
    response.on("error",console.error);
})

http.get(url3,function(response){
    response.setEncoding('utf8');
    var texts = '';
    response.pipe(bl(function(err,data){
        texts += data.toString();
        console.log(texts);
        fs.writeFile('file3',texts,function(err){
        
        })
    }))
    
    response.on("error",console.error);
})
// result.on("error",console.error);
var stdout = [];
var files = {
    file1:"file1",
    fill2:"file2",
    file3:"file3"
}
async.forEach(files,(value,key,callback)=>{
    fs.readFile(value,'utf8',function(err,data){
        stdout[key] = data;
    })
},err =>{
    if(err) console.err(err.message);
    console.log(stdout[key])
})