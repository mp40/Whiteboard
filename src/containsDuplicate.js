const findDuplicate = function (arr){
    let temp = arr.sort(function(a,b){return a - b})
    let result = false;
    temp.forEach((val, dex)=>{
        if (val === temp[dex+1]){
            result = true
        }
    })

    return result 
}

module.exports = findDuplicate