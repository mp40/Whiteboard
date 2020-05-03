// Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/
// https://www.youtube.com/watch?v=5o-kdjv7FD0

/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

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


// Approach: Dynamic Programming
// Complexity Analysis
// Time complexity : O(n). Single loop upto n.
// Space complexity : O(n). dpdp array of size nn is used.
export const climbStairs = (n) => {
    if(n === 1) {
        return 1;
    }

    const trackWays = [1,1];

    for(let i = 2 ; i <= n; i++){
        trackWays[i] = trackWays[i-1] + trackWays[i-2];
    }

    return trackWays[n];
}

// Approach 4: Fibonacci Number
// Complexity Analysis
// Time complexity : O(n). Single loop upto n is required to calculate nth fibonacci number.
// Space complexity : O(1). Constant space is used.
export const climbStairsFib = (n) => {
    if(n < 3) {
        return n;
    }

    let prev1 = 2;
    let prev2 = 1;

    for(let i = 3; i < n; i++) {
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1= current
    }

    return prev1 + prev2
}
