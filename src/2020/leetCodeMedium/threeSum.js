// Three Sum
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/776/

/*
Given an array nums of n integers,
are there elements a, b, c in nums such that a + b + c = 0?
Find all unique triplets in the array which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.

Example:
Given array nums = [-1, 0, 1, 2, -1, -4],
A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

export const threeSum = function(nums) {
    const hashSet = {};
    nums = nums.sort();

    for(let i=0; i<nums.length; i++){
        const target = 0 - nums[i];
        let cache = {};
        for(let j=i+1; j<nums.length; j++){
            const difference = target - nums[j];
            if(cache[difference] !== undefined) {
                hashSet[`${nums[i]}${nums[cache[difference]]}${nums[j]}`] = [nums[i], nums[cache[difference]], nums[j]];
            } else {
                cache[nums[j]] = j
            }
        }
    }
    return Object.values(hashSet);
};
