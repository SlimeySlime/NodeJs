//finding 단어를 변경했을 '때' 이벤트 발생
//id가 finding인 쿼리를 선택 -> #finding 
document.querySelector('#finding').addEventListener('change',function(){
    var users = document.querySelector('#finding').value;
    // alert('mm');
    finding(users);
})

chrome.storage.sync.set({
    userWords:users
});

function finding(userfinding){
    chrome.tabs.executeScript({
        code:`document.querySelector("body").innerText;`
        },function(result){
    
            var bodyText = result[0];
            var bodyNum = bodyText.split(' ').length;
            var myNum = bodyText.match(new RegExp(`\\b${userfinding}\\b`, 'gi')).length;
            var resultTxt = (bodyNum + '/' + myNum + '( '+ (myNum/bodyNum * 100) + '% )');
            var resultTxt = bodyNum + ' (' + myNum + '% )'
            document.querySelector('#result').innerText = resultTxt;
        
    });
}    

// chrome.tabs.move();
//미친 execute가 아니라 excute라고 써서 계속 헛짓함/

