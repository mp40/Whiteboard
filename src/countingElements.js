
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const total = A.reduce((sum, num)=>{
        return sum + num
    })
    let checkTotal  = 0
    for(let i=0; i<A.length; i++){
        checkTotal += i+1
    }
    return total === checkTotal ? 1 : 0
}

module.exports = solution