var net = require('net');

var today = new Date();

function getDate(){
    var string = '';
    string += today.getFullYear()+"-";
    string += today.getMonth()+1+"-";
    if(today.getDay() < 10){
        string += "0"+today.getDay()+" ";
    }else string += today.getDay()+" ";
    
    if (today.getHours() < 10 ){
        string += "0"+today.getHours()+"-" ;
    }else string += today.getHours()+"-" ;

    string += today.getMinutes();

    return string;
}

console.log(getDate());