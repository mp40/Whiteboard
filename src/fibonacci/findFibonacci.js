const findFibonacci = function(target){
    if(target === 0){
        return target
    }
    let result = 1;
    let last = 0;
    for(let i=1; i<target;i++){
        let temp = result + last
        last = result
        result = temp
    }
    return result
}

module.exports = findFibonacci