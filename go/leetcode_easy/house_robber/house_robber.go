package house_robber

// House Robber
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/576/

func Rob(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	include := 0
	exclude := 0

	for house := 0; house < len(nums); house++ {
		temp := include
		include = nums[house] + exclude

		if temp > exclude {
			exclude = temp
		}
	}

	if include > exclude {
		return include
	}

	return exclude
}
