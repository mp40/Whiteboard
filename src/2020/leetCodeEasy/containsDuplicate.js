// Contains Duplicate
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

/*
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array,
and it should return false if every element is distinct.
*/
/*
Example 1:
Input: [1,2,3,1]
Output: true

Example 2:
Input: [1,2,3,4]
Output: false
*/

// this passed and had better run time than 97.18% of all other JS submissions.
export const containsDuplicate = function(nums) {
    const hashSet = new Set(nums);
    return hashSet.size !== nums.length
};
