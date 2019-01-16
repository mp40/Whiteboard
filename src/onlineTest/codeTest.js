function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    let result = 0;
    S = S.replace("?",".")
    S = S.replace("!", ".")

    let arr = S.split(".");
    arr.forEach((val)=>{
        let temp = val.split(" ")
        console.log(temp)
        let filtered = temp.filter((val)=>{
            return val.length > 0
        })
        if (filtered.length){
            let count = filtered.length
            if (count > result){
                result = count
            }    
        }
    })
    return result
    }







    // let arr = S.split(".")
    // arr.forEach((val)=>{
    //     if(val.includes("?")){
    //         let temp = val.split("?")
    //         for (let i=0; i<temp.length;i++){
    //             arr.push(i)
    //         }
    //     }
    // })
    // arr.forEach((val)=>{
    //     if (val.includes("!")){
    //         let temp = val.split("!")
    //         for(let i=0; i<temp.length; i++){
    //             arr.push(i)
    //         }
    //     }
    // })
    // const sorted = arr.sort(function(a,b){a.length - b.length})
    // return sorted[sorted.length-1].length


module.exports = solution