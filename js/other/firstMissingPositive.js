// 41. First Missing Positive
// https://leetcode.com/problems/first-missing-positive/

/*
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:
Input: [1,2,0]
Output: 3

Example 2:
Input: [3,4,-1,1]
Output: 2

Example 3:
Input: [7,8,9,11,12]
Output: 1

Note:
Your algorithm should run in O(n) time and uses constant extra space.
*/

export const firstMissingPositive = (nums) => {
    //edge cases
    if(!nums || nums.length === 0) {
        return 1;
    }

    let containsOne = false;

    // step 1
    // missing value is from 1 to nums.length +1
    // change non-positive numbers and numbers over nums.length
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            containsOne = true;
        } else if(nums[i] < 1 || nums[i] > nums.length) {
            nums[i] = 1;
        }
    }

    //  if array did not contain 1
    if(!containsOne) {
        return 1
    }

    // step 2
    // nums values are now index + 1 refrences
    // look at each reference and flip to negitive to show we saw thaat value
    for(let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) -1;
        if(nums[index] > 0) {
            nums[index] = -Math.abs(nums[index])
        }

    }

    // step 3
    // find first non-negitive number
    for(let i = 0; i < nums.length; i++)  {
        if(nums[i] > 0) {
            return i + 1
        }
    }

    return nums.length + 1;
};

/*
Math.abs(num) => Always positive
-Math.abs(num) => Always negative
https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9SnkdYXNIzM%26fbclid%3DIwAR1NN-k5stHx_tvm022oeZ00EobuGNQpmOC2pP4p_CRMQ0QaxBNFGRHFVyM&h=AT0aiu8_aWYpObJDcl0duB6kw8W5b4GlqYnmGs498iOkJM7K0-lRNP28eY6dBxcrh3l6Do8zLwHvgDhgXPIOihoeQtv9t389WDVqlh1vfimDvJg9gTTfQsern3UsqmNiCJ_5fodX
*/