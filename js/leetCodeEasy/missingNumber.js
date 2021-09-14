// Missing Number
// https://leetcode.com/problems/missing-number/

/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
find the one that is missing from the array.

Example 1:
Input: [3,0,1]
Output: 2

Example 2:
Input: [9,6,4,2,3,5,7,0,1]
Output: 8
*/

// "HashSet" Approach
// use object to map numbers

export const missingNumber = function(nums) {
    const hashSet = new Set(nums)

    for(let i = 0; i <= nums.length; i++){
        if(!hashSet.has(i)){
            return i
        }
    }
};

/*
//this fails on long arrays - dont know why
export const missingNumber = function(nums) {
    const cache = {};
    nums = nums.sort();

    for(let i = 0; i <= nums.length; i++){
        cache[i] = 1;
        cache[nums[i]] = 0;
        if(cache[i] === 1){
            return i;
        }
    }

    return null;
};
*/