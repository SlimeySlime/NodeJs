var ex = [2,2,3,3];
console.log(solution(ex,10));

console.log(solution([1000,3000,2000,5000,4000],12500));

function solution(d, budget){
    
    d.sort();
    var sum = 0;
    var sumca = 0;
    for(var i = 0 ; i < d.length ; i++){
        sum += d[i];
        if(sum > budget) {
            console.log('ok '+ d[i]+' is limit. sumca is '+sumca);
            break;
        }
        sumca++;
    }
    return sumca;
    
}


