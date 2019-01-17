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

module.exports = findValue