/*
A small frog wants to get to the other side of a river. 
The frog is initially located at one bank of the river (position −1) 
and wants to get to the other bank (position N). 
The frog can jump over any distance F(K), 
where F(K) is the K-th Fibonacci number. 
Luckily, there are many leaves on the river, 
and the frog can jump between the leaves, 
but only in the direction of the bank at position N.

The leaves on the river are represented in an array consisting of N integers.
Consecutive elements of array represent 
consecutive positions from 0 to N − 1 on the river. 
Array contains only 0s and/or 1s:

0 represents a position without a leaf;
1 represents a position containing a leaf.

The goal is to count the minimum number of jumps 
in which the frog can get to the other side of the river 
(from position −1 to position N). 
The frog can jump between positions −1 and N (the banks of the river) 
and every position containing a leaf.
*/

const findJumps = function(len){
    if (len < 2){
        return 1
    }
    let fibJumps = [1]
    // populate array containing possible jump lengths
    if (len > 1){
        let last = 1
        let beforeLast = 0
        while(last < len){
            let temp = last + beforeLast
            beforeLast = last
            last = temp
            if (last < len){
                fibJumps.push(last)
            }
        }
    }
    return fibJumps
}

const fibFrog = function(arr){
    
    let fibJumps = findJumps(arr.length)
    console.log(fibJumps)
    console.log(arr)
    
}

module.exports = {fibFrog, findJumps}