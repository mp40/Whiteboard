package contains_duplicate

// Contains Duplicate
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

func ContainsDuplicate(nums []int) bool {
	m := make(map[int]int)

	for i := 0; i < len(nums); i++ {
		if _, ok := m[nums[i]]; ok {
			return true
		}

		m[nums[i]] = 1
	}

	return false
}
