function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let temp = []; 
    let result = undefined;
    for(let i=0; i<A.length; i++){
        if(A[i] < X+1){
            if(temp.indexOf(A[i])<0){
                temp.push(A[i])
                console.log(temp)
            }
        }
        if(temp.length = X){
            result = i
        }
    }
    return result
}

module.exports = solution