var fs = require('fs');
var path = require('path');

module.exports = function(dir,filterString,callback){
    fs.readdir(dir,function(err,list){
        //에러가 발생하면 콜백함수에 err를 넣어 리턴
        if(err){return callback(err)}
        
        list = list.filter(function(file){
            return path.extname(file) === '.'+filterString;
        })

        //정상적으로 끝나면 두번째 인자로 list를 리턴
        callback(null,list);
    })
}