/*
An array consisting of N integers is given
A bi-valued slice of this array is consisting 
of at most 2 different numbers
Return the size of the largest bi-valued slice
ex: [5, 4, 4, 5, 0, 12]  => 4 (since the slice from index 0 to 3 is bi-valued)
*/

function biValue(arr){
    let startNum = arr[0]
    let otherNum = undefined
    let count = 0
    let result = 0


    for(let i=0; i<arr.length; i++){
        if(arr[i] === startNum || arr[i] === otherNum){
            count++
        }
        if(arr[i] !== startNum){
            if(otherNum === undefined){
                otherNum = arr[i]
                count++
            } else if (arr[i] !== otherNum){
                if(count > result){
                    result = count
                }
                count = 2
                startNum = otherNum
                otherNum = arr[i]
            }
        }
        if(i === arr.length-1){
            if(count > result){
                result = count
            }
        }
    }  
    return result      
}

module.exports = biValue
