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

// below works but fails Time Limit
// export const threeSum = function(nums) {
//     const hashSet = {};
//     nums = nums.sort();

//     for(let i=0; i<nums.length; i++){
//         const target = 0 - nums[i];
//         let cache = {};
//         for(let j=i+1; j<nums.length; j++){
//             const difference = target - nums[j];
//             if(cache[difference] !== undefined) {
//                 hashSet[`${nums[i]}+${nums[cache[difference]]}+${nums[j]}`] = [nums[i], nums[cache[difference]], nums[j]];
//             } else {
//                 cache[nums[j]] = j
//             }
//         }
//     }
//     return Object.values(hashSet);
// };

// after quite a few failed attempts to pass leetcode runtime tests
// copied below from here:
// https://leetcode.com/problems/3sum/discuss/281302/JavaScript-with-lots-of-explanatory-comments!
export const threeSum = function(nums) {
    const result = [];
    //sort by numerical value lowest to greatest
    nums = nums.sort((a, b) => a - b);

    for(let i=0; i<nums.length-2; i++){
        // break out of loop, cause if bigger than 0 - reaching target is impossible
        if(nums[i] > 0){
            break;
        }

        // if i appears again go to next loop iteration
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let left = i+1
        let right = nums.length - 1;
        while(left < right){
            const total = nums[i] + nums[left] + nums[right];
            if(total === 0){
                result.push([nums[i], nums[left], nums[right]]);
                while(nums[left] === nums[left+1]){
                    left++
                }
                while(nums[right] === nums[right-1]){
                    right--
                }
                left++
                right--
            } else if(total < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return result;
};