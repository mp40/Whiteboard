/*
Given an array of int find
the largest increasing sub-sequence
*/

const findSub = function (arr){
    console.log(arr)
    let result = 0;
    let current = 0;
    let start = 0;
    let end = 0;

    for (let i = 0; i<arr.length; i++){
        current =0;
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]<arr[j]){
                if (current === 0){start = i}
                current ++
                if (current > result){result = current}
                end = j
            }
        }
    }
    console.log(result)
    return[result,start,end]
}
    module.exports = findSub