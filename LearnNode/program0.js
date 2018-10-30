
var async = require('async');

var fs = require('fs');
var http = require('http');
var bl = require('bl');
// 결과를 담을 results 배열
var results = [];
var count = 0;

function printResult(){
    for(var i = 0 ; i < 3 ; i++){
        console.log(results[i]);
    }
}

function httpGet(urlNum){
    http.get(process.argv[2+urlNum],function(response){
        response.setEncoding('utf8');
        var texts = '';
        // console.log(response);
    
        response.pipe(bl(function(err,data){
            if(err) console.log("err : "+err);
            // texts += data.toString();
            // fs.writeFile(`./file${urlNum+1}`,texts,function(err){
            //     if(err) console.log(err);
            // })
            count++;
            results[urlNum] = data.toString();

            if(count === 3){
                printResult();
            }
        }))

        //count ++ 와 printResult()를 호출하는것을 
        // respons.pipe() 바깥에 설정했을때 정상적으로 작동하지않았음
    
    
        
        response.on("error",console.error);
    })
    
}
for(var i = 0 ; i < 3 ; i++){
    httpGet(i);
}

// http.get(url1,function(response){
//     response.setEncoding('utf8');
//     var texts = '';
//     // console.log(response);

//     response.pipe(bl(function(err,data){
//         if(err) console.log("err : "+err);
//         texts += data.toString();
//         fs.writeFile(`./file${1}`,texts,function(err){
//             if(err) console.log(err);
//         })

//         results[0] = texts;

//     }))

//     count++;

//     if(count === 3){
//         printResult(results);
//     }
//     response.on("error",console.error);
// })

// http.get(url2,function(response){
//     response.setEncoding('utf8');
//     var texts = '';
//     // console.log(response);

//     response.pipe(bl(function(err,data){
//         if(err) console.log("err : "+err);
//         texts += data.toString();
//         fs.writeFile(`./file${2}`,texts,function(err){
//             if(err) console.log(err);
//         })
//         results[1] = texts;

//     }))

//     count++;

//     if(count === 3){
//         printResult(results);
//     }   
//     response.on("error",console.error);
// })

// http.get(url3,function(response){
//     response.setEncoding('utf8');
//     var texts = '';
//     response.pipe(bl(function(err,data){
//         if(err) console.log("err : "+err);
//         texts += data.toString();
//         fs.writeFile(`./file${3}`,texts,function(err){
//             if(err) console.log(err);
//         })
//         results[2] = texts;

//     }))

//     count++;
//     if(count === 3){
//         printResult(results);
//     }
//     response.on("error",console.error);
// })
// // result.on("error",console.error);
// // var stdout = [];
// // var files = {
// //     file1:"file1",
// //     fill2:"file2",
// //     file3:"file3"
// // }
// // async.forEach(files,(value,key,callback)=>{
// //     fs.readFile(value,'utf8',function(err,data){
// //         stdout[key] = data;
// //     })
// // },err =>{
// //     if(err) console.err(err.message);
// //     console.log(stdout[key])
// // })