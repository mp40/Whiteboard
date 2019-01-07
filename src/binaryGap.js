function convertToBinary(num){
    return num.toString(2)
}

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const binary = convertToBinary(N)
    let result = 0;
    let temp = 0;
    
    for(let i=0; i<binary.length; i++){
        if (binary.charAt(i) === "0"){
            temp++
        } else {
            result = temp > result ? temp : result;
            temp = 0
        }
    }
    return result
}

module.exports = {solution, convertToBinary}
