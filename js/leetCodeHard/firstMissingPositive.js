// 41. First Missing Positive
// https://leetcode.com/problems/first-missing-positive/

/*
Given an unsorted integer array,
find the smallest missing positive integer.

Example 1:
Input: [1,2,0]
Output: 3

Example 2:
Input: [3,4,-1,1]
Output: 2

Example 3:
Input: [7,8,9,11,12]
Output: 1

Note:
Your algorithm should run in O(n) time and uses constant extra space.
*/

// https://www.youtube.com/watch?v=9SnkdYXNIzM

export const firstMissingPositive = (nums) => {
    if(!nums || nums.length === 0) {
        return 1;
    }

    let containsOne = false;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            containsOne = true;
        }

        if(nums[i] < 1 || nums[i] > nums.length) {
            nums[i] = 1;
        }
    }

    if(!containsOne) {
        return 1;
    }

    for(let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;

        if(nums[index] > 0) {
            nums[index] = -Math.abs(nums[index]);
        }
    }

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) {
            return i + 1;
        }
    }

    return nums.length + 1;
}