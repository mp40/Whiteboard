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
    const result = [];
    nums = nums.sort();

    for(let i=0; i < nums.length; i++){
        // fixed value cannot be same as last value
        const fixed = nums[i]
        if(i !== 0 && fixed === nums[i-1]){
            continue;
        }
        let leftPointer = i+1
        let rightPointer = nums.length-1;

        while(leftPointer < rightPointer){
            if(fixed + nums[leftPointer] + nums[rightPointer] === 0){
                result.push([fixed, nums[leftPointer], nums[rightPointer]])
                leftPointer++
                // Never let leftPointer refer to the same value twice (in an output) to avoid duplicates
                while (leftPointer < rightPointer && nums[leftPointer] === nums[leftPointer-1]){
                    leftPointer++
                }
            } else if(fixed + nums[leftPointer] + nums[rightPointer] < 0){
                leftPointer++
            } else {
                rightPointer--
            }
        }
    }
    return result;
};

/*
input = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
output = [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]
*/