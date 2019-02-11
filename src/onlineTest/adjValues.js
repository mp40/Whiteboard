// from a non empty array filled with numbers
// return the max distance between the index of two "adjacent" number
// 2 numbers are adjacent when there is no other value inbetween them in the array

// function createDexArray(n){
//     let dexArray = []
//     for (let  i=0; i<n; i++){
//         dexArray.push(i)
//     }
//     return dexArray
// }

// function compare(arr, dexArr){
//     let result = -1
//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i] !== arr[i+1]){
//             let temp = Math.abs(dexArr[i+0] - dexArr[i+1])
//             if (temp > result){
//                 result = temp
//             }
//         }
//     }
//     return result
// }

// function compareVal (arr){
//     let dexArray = createDexArray(arr.length)

//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<(arr.length-1-i); j++){
//             if(arr[j]>arr[j+1]){
//                 const lesser = arr[j+1]
//                 arr[j+1] = arr[j]
//                 arr[j] = lesser
//                 const lesserDex = dexArray[j+1]
//                 dexArray[j+1] = dexArray[j]
//                 dexArray[j] = lesserDex
//             }
//         }
//     }
//     return compare(arr, dexArray)
// } 

function compareVal (arr){
    let maxDistance = -1

    for(let i=0; i<arr.length; i++){
        let maxDifference = Number.MAX_VALUE
        const left = arr[i]

        for(let j=i+1; j<arr.length; j++){
            const right = arr[j]
            const difference = Math.abs(left-right)

            if(left !== right && difference < maxDistance){
                maxDistance = Math.max(maxDistance, Math.abs(i-j))
                maxDifference = difference
            }
        }
    }
    return maxDistance
}
module.exports = compareVal
// module.exports = {compareVal, createDexArray, compare}