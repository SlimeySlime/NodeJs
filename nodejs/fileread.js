var fs = require('fs');
fs.readFile('sample.txt',function(err,data){
    console.log(data);
});
// fs.readFile('sample.text', (err,data) =>{
//     if(err) throw err;
//     console.log(data+" "+err);
// })
