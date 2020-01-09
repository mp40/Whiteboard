//Remove Duplicates from Sorted Array
//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

/*
Given a sorted array nums, remove the duplicates in-place
such that each element appear only once and return the new length.
Do not allocate extra space for another array,
you must do this by modifying the input array in-place with O(1) extra memory.
*/

export const removeDuplicates = (nums) => {
    return null;
}

/*
Clarification:
Confused why the returned value is an integer but your answer is an array?
Note that the input array is passed in by reference,
which means modification to the input array will be known to the caller as well.
*/

/*
Approach 1: Two Pointers
Algorithm

Since the array is already sorted, we can keep two pointers i and j,
where i is the slow-runner while j is the fast-runner.
As long as nums[i] = nums[j], we increment j to skip the duplicate.
When we encounter nums[j] != nums[i],
the duplicate run has ended so we must copy its value to nums[i+1].
i is then incremented and we repeat the same process again until j reaches the end of array.
*/