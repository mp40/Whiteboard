function checkOpener(S, i){
const opener = "({[";
const char = S.charAt(i);

return opener.includes(char) ? true : false

}

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    if(S.length%2 !== 0){
        return 0
    }
    if(S.length === 0){
        return 1
    }
    const opener = "({["
    const closer = {
        "(": ")",
        '{':"}",
        '[':']'
    }
    const stopper = "!"
    S = S+stopper
    let stack = [stopper]
    for (let i = 0; i<S.length; i++){
        if(checkOpener(S,i)){
            let temp = S.charAt(i);
            stack.push(closer[temp])
        } else {
            if(stack.pop() !== S.charAt(i)){
                return 0
            }
        }        
    }

    return 1
}
module.exports = {solution, checkOpener}