const findValue = function(number){
    if(number === 1){
        return number
    }
    let result = 0;
    let last = 1
    let beforeLast = 0

    for(let i=1; i < number; i++){
        result = last + beforeLast
        beforeLast = last
        last = result
    }
    return result
}

const recurseFib = function(number){
    if (number === 1) {
        return 1
    }
    let result = 0;
    let count = 1
    let last = 1
    let beforeLast = 0 
    const recur = function(){
        result = last + beforeLast
        beforeLast = last
        last = result
        if (count === number-1){
            return result
        }
        count ++
        recur() 
    }
    recur()
    return result
}

module.exports = {findValue, recurseFib}