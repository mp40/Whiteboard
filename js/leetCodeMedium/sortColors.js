// Sort Colors
// https://leetcode.com/problems/sort-colors/

/*
Given an array with n objects colored red, white or blue,
sort them in-place so that objects of the same color are adjacent,
with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Follow up:
A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?
*/

export const sortColors = (nums) => {
    if(nums.length < 2) {
        return;
    }

    let left = 0;
    let right = nums.length - 1;
    let index = 0;

    while(index <= right && left < right) {
        if(nums[index] === 0) {
            nums[index] = nums[left];
            nums[left] = 0;
            left += 1;
            index += 1;
        } else if (nums[index] === 2) {
            nums[index] = nums[right];
            nums[right] = 2;
            right -= 1;
        } else {
            index += 1;
        }

    }
};