var fs = require('fs');

var num = undefined;

fs.readFile('nums',function done(err,data){
    num = parseInt(data);
    console.error(num);
})