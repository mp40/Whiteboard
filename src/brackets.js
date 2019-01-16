function checkOpener(S, i){
    const opener = "({[";
    const char = S.charAt(i);
    return opener.includes(char) ? true : false
}

function checkBrackets(brackets) {
    if(brackets.length%2 !== 0){
        return false
    }
    if(brackets.length === 0){
        return true
    }
    const closer = {
        "(": ")",
        '{':"}",
        '[':']'
    }
    const stopper = "!"
    brackets = brackets+stopper
    let stack = [stopper]
    for (let i = 0; i<brackets.length; i++){
        if(checkOpener(brackets,i)){
            let temp = brackets.charAt(i);
            stack.push(closer[temp])
        } else {
            if(stack.pop() !== brackets.charAt(i)){
                return false
            }
        }        
    }
    return true
}
module.exports = {checkBrackets, checkOpener}