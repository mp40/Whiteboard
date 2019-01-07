function split(num,len){
    return num > 0 && num < len ? true : false
}

function calculateDiff(tape, total){
    let result = (total-tape)-tape
    return result < 0 ? result*-1 : result
}

function findResult(temp, result){
    return result === undefined ? temp : temp < result ? temp : result
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = undefined;
    let total = A.reduce((sum,num)=>{
        return sum + num;
    });
    let sum = 0;

    for(let i=0; i<A.length-1; i++){
        sum += A[i];
        if (split(A[i],A.length)){
            result = findResult(calculateDiff(sum,total),result) 
            // let temp = calculateDiff(sum,total)
            // result === undefined || result > temp ? result = temp : result = result 
        }
    }
    return result
}

module.exports = {solution, split, calculateDiff, findResult};