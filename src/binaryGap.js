function convertToBinary(num){
    return num.toString(2)
}

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const binary = N.toString(2)
    console.log(binary)
    let count = false
    let result = 0;
    let temp = 0;
    
    for(let i=0; i<binary.length; i++){
        if (i === "1"){
            if (count === false){
                temp = 0            
            }
            count = !count
        }
     if (i==="0" && count){
         temp++
         if (temp > result){
             result = temp
         }
     }   
    }
    return result
}

module.exports = {solution, convertToBinary}
