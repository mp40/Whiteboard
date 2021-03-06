// Search Insert Position
// https://leetcode.com/problems/search-insert-position/

/*
Given a sorted array and a target value,
return the index if the target is found.
If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:
Input: [1,3,5,6], 5
Output: 2

Example 2
Input: [1,3,5,6], 2
Output: 1

Example 3:
Input: [1,3,5,6], 7
Output: 4

Example 4:
Input: [1,3,5,6], 0
Output: 0
*/

// below is simple iterative solution,
// binary search version also possible.

export const searchInsert = (nums, target) => {

    if(target < nums[0]) {
        return 0;
    }

    if(target > nums[nums.length-1]) {
        return nums.length;
    }

    for(let i = 0; i < nums.length; i++) {
        if(target === nums[i] || target < nums[i]) {
            return i;
        }
    }

}