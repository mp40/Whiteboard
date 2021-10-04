package missing_number

// Missing Number
// https://leetcode.com/problems/missing-number/

func MissingNumber(nums []int) int {
	l := len(nums)
	sum := 0
	cnt := l

	for i := 0; i < l; i++ {
		sum += nums[i]
		cnt += i
	}

	return cnt - sum
}
