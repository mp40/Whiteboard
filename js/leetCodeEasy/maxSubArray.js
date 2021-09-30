// Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

/*
Given an integer array nums,
find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.

Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

// explaination on how to break problem down
// https://www.youtube.com/watch?v=2MmGzdiKR9Y

export const maxSubArray = function(nums) {

    let bestValue = nums[0];
    let previousBest = nums[0];

    for(let i = 1; i < nums.length; i++){
        let currentValue = nums[i]
        // check if the current value is less than current plus previous best
        if(currentValue < currentValue + previousBest) {
            // if less then new previous best is previous best plus current value
            previousBest = currentValue + previousBest;
        } else {
            // else if current value is higher, then current value is new previous best
            previousBest = currentValue;
        }

        if(previousBest > bestValue){
            bestValue = previousBest
        }
    }

    return bestValue;
};