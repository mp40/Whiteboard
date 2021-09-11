// Intersection of Two Arrays II
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

/*
Given two arrays, write a function to compute their intersection.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
*/

export const intersect = (nums1, nums2) => {

    const results = [];
    const obj = {};

    for(let i = 0; i < nums1.length; i++){
        obj[nums1[i]] = obj[nums1[i]] ? obj[[nums1[i]]] + 1 : 1;
    }

    for(let i = 0; i < nums2.length; i++) {
        if(obj[nums2[i]]){
            obj[nums2[i]]--
            results.push(nums2[i])
        }
    }


    return results;
}