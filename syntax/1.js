var f = function (){
    console.log(1+1);
    console.log(2+22);
}
var g = function (){
    console.log(22+1);
    console.log(2+2);
}

var a = [f,g];
a[0]();

fs = require('fs');
console.log(fs);