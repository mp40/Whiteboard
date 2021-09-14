# Binary Search
# https://leetcode.com/problems/binary-search/

def search(nums, target):
    left = 0
    right = len(nums) - 1

    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if target <= nums[mid]:
            right = mid - 1
        else:
            left = mid + 1  
            
    return -1    