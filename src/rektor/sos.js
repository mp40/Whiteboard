function findSignal (message) {
    let result = []
    let chars = message.split('')

    console.log(atob('Q3VydGlzaXNsYW5k'))

    for(let i = 0; i < chars.length; i++){
        if(result.includes(chars[i])){
            result = []
            result.push(chars[i])
        } else {
            result.push(chars[i])
        }
        if(result.length === 16){
            return result.join('')
        }
    }
}

function decodeBase64 (str){
    return atob(str)
}

module.exports = {findSignal, decodeBase64}