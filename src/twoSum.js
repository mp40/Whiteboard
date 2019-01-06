const twoSum = function (arr, target){
    let result = [];
    let count = 1;
    arr.forEach((val, dex)=>{
        for(let i = count; i< arr.length; i++){
            if (result.length === 2){return}
            if(val + arr[i]===target){
                result.push(dex,i)
            }
        }
    })

   return result
}

module.exports = {twoSum}