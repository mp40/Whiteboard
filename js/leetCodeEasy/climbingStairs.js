// Climbing Stairs
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/569/

// export const climbStairs = (n) => {

// }

/*
You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps.
In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/*
ANSWER BELOW THIS COMMENT BLOCK
-
-
-
-
-
*/

// think fibonacci

// export const climbStairs = function(n) {
//     if(n < 3){
//         return n;
//     }

//     let lastStep = 2;
//     let secondLastStep = 1;
//     let result = undefined;
//     for(let i = 3; i <= n; i++){
//         result = lastStep + secondLastStep;
//         secondLastStep = lastStep;
//         lastStep = result;
//     }

//     return result;
// };

const memoize = (fn) => {
    const cache = {};
    return function(...args){
        if(cache[args]){
            return cache[args];
        }
        const result = fn.apply(this, args)
        cache[args] = result;
        return result;
    }
}

export const slowClimbStairs = function(n) {
    if(n < 3){
        return n;
    }

    return climbStairs(n-1) + climbStairs(n-2);
};

export const climbStairs = memoize(slowClimbStairs);