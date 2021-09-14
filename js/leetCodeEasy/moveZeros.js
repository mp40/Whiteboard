// Move Zeroes
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

/*
Given an array nums,
write a function to move all 0's to the end of it
while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/*
two pointer approch
one poiner to track non-Zero index
another pointer to track position while traversing array
*/
export const moveZeroes = function(nums) {
    // we don't need to run logic on empty arrays or arrays with one element
    if(nums.length < 2){
        return;
    }
    //set pointer for last non-Zero element position
    let slowPointer = 0;

    for(let fastPointer = 0; fastPointer < nums.length; fastPointer++) {
        if(nums[fastPointer] !== 0) {
            nums[slowPointer] = nums[fastPointer];
            //if both pointers are the same we don't want to set value to 0
            //think of edge cases with length 2 arrays.
            if(slowPointer !== fastPointer){
                nums[fastPointer] = 0;
            }
            //increment pointer to next position
            slowPointer++
        }
    }

};