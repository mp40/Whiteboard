// Rotate Array
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

/*
Given an array, rotate the array to the right by k steps, where k is non-negative.
Do not return anything, modify nums in-place instead.
*/

export const rotate = (nums, k) => {

    // this is for cases when rotating is not required.
    if(nums.length < 2){
        return;
    }

    // this is for cases when k exceeds length of array.
    k = k % nums.length

    function reverse(start, end) {
        while(start < end) {
            let temp = nums[end];
            nums[end] = nums[start];
            nums[start] = temp;
            start++;
            end--;
        }
    }

    reverse(0, nums.length - 1); // reverse array
    reverse(0, k - 1); // reverse first k elements with each other
    reverse(k, nums.length - 1); //reverse remaining with each other
}

/*
Approach #4 Using Reverse [Accepted]
Algorithm

This approach is based on the fact that when we rotate the array k times,
k lements from the back end of the array come to the front
and the rest of the elements from the front shift backwards.

In this approach, we firstly reverse all the elements of the array.
Then, reversing the first k elements followed by reversing the
rest n - k elements gives us the required result.
*/