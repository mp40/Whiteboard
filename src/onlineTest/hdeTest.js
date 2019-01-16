const sumSquares = function(arr){
    const newArr = arr.filter((val)=>{
        return val >= 0
    })
    const result = newArr.reduce((sum, num)=>{
        return sum + Math.pow(num, 2)
    },0) 
    return result
} 

const sumWithRecursion = function(arr){
    let count = 0
    let result = 0
    const len = arr.length

    const recurse = function(arr){
        if(count === len){
            return
        }
        if (arr[count]>=0){
            result = result + arr[count]*arr[count]
            count++
            recurse(arr)    
        }
    }
    recurse(arr)
    return result
}

module.exports = {
    sumSquares,
    sumWithRecursion
}