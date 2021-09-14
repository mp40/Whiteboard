package binary_search

// Binary Search
// https://leetcode.com/problems/binary-search/

func Search(nums []int, target int) int {
	left := 0
	right := len(nums) - 1

	for left <= right {
		mid := (left + right) / 2

		if target == nums[mid] {
			return mid
		}

		if target < nums[mid] {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return -1
}
