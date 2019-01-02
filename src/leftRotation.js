/*
Complete the function rotateLeft below. It should return the resulting array of integers.
It has the following parameter(s):
An array of integers .
An integer , the number of rotations.

Input
The first line contains two space-separated integers n and d, the size of a and the number of left rotations you must perform. 
The second line contains n space-separated integers a[i].

Output
Print a single line of n space-separated integers denoting the final state of the array after performing d left rotations.
*/

const rotateLeft = function (a, d) {
    const splitFirst = a.split(" ");
    let splitSecond = d.split(" ");

    let shifted = splitSecond.shift();
    splitSecond.push(shifted)

    return splitSecond.join(" ")
}

module.exports = {
    rotateLeft
}