// from a non empty array filled with numbers
// return the max distance between the index of two "adjacent" number
// 2 numbers are adjacent when there is no other value inbetween them in the array

function createDexArray(n){
    let dexArray = []
    for (let  i=0; i<n; i++){
        dexArray.push(i)
    }
    return dexArray
}

function compare(arr, dexArr){
    let result = undefined
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] !== arr[i+1]){
            let temp = Math.abs(dexArr[i+0] - dexArr[i+1])
            if (temp > result || result === undefined){
                result = temp
            }
        }
    }
    return result
}

function adjValues (arr){
    let dexArray = createDexArray(arr.length)

    for(let i=0; i<arr.length; i++){
        for(let j=0; j<(arr.length-1-i); j++){
            if(arr[j]>arr[j+1]){
                const lesser = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = lesser
                const lesserDex = dexArray[j+1]
                dexArray[j+1] = dexArray[j]
                dexArray[j] = lesserDex
            }
        }
    }
    return compare(arr, dexArray)
} 

module.exports = {adjValues, createDexArray, compare}