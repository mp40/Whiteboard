function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length<1){
        return 1
    }
    const sorted = A.sort(function(a,b){
        return a-b
    })
    for (let i=0; i<sorted.length; i++){
        if(A.indexOf(i+1)=== -1){
            return i+1
        }
    }
}

module.exports = solution