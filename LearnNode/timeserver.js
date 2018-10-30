var net = require('net');

var today = new Date();
var portnum = process.argv[2];
var server = net.createServer(function(socket){
    // var date1 = data.getDate();
    socket.write(getDate());
    socket.write('\n');
    socket.end();
})


function getDate(){
    var string = '';
    string += today.getFullYear()+"-";
    string += today.getMonth()+1+"-";
    if(today.getDay() < 10){
        string += "0"+today.getDay()+" ";
    }else string += today.getDay()+" ";
    
    // if (today.getHours() < 10 ){
    //     string += "0"+today.getHours()+":" ;
    // }else string += today.getHours()+":" ;
    // 아래처럼 가능
    today.getHours() < 10 ? string += "0"+today.getHours()+":" : string += today.getHours()+":" ;

    string += today.getMinutes();

    return string;
}

server.listen(portnum);    