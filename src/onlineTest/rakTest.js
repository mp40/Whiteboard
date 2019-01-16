// calculate binarian value of an array
// find smallest arry that has same binarian
const solution = function(A){
    const target = calcBinarian(A)

    return length
}

const calcBinarian = function(arr){
    let result = 0
    for (let i =0; i<arr.length; i++){
        result = result + Math.pow(2,arr[i])
    }
    return result
}

module.exports = {solution, calcBinarian}
