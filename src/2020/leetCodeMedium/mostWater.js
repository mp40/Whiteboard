// Container With Most Water
// https://leetcode.com/problems/container-with-most-water/

/*
Given n non-negative integers,
where each represents a point at coordinate.
n vertical lines are drawn.
Find two lines, which together with x-axis forms a container,
such that the container contains the most water.

Note:
You may not slant the container and n is at least 2.

Example:
Input: [1,8,6,2,5,4,8,3,7]
Output: 49

Explaination:
8 and 7 form container with most water.
7 is the shortest height.
7 is the distance between the two lines
height (7) * width (7) = 49

*/

export const maxArea = (height) => {
    let water = 0;

    let left = 0
    let right = height.length - 1;

    while(left < right) {
        const temp = Math.min(height[left], height[right]) * (right - left);
        water = Math.max(water, temp)

        if(height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return water;
};