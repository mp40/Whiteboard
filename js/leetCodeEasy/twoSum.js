// Two Sum
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

/*
Given an array of integers,
return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/*
Approach 3: One-pass Hash Table
It turns out we can do it in one-pass.
While we iterate and inserting elements into the table,
we also look back to check if current element's complement
already exists in the table.
If it exists, we have found a solution and return immediately.
*/

export const twoSum = function(nums, target) {
    const cache = {};

    for(let i = 0; i < nums.length; i++) {
        const difference = target - nums[i]
        if(cache[difference] !== undefined){
            return [cache[difference], i]
        } else {
            cache[nums[i]] = i
        }
    };
};