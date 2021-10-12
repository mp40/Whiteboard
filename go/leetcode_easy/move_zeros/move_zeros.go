package move_zeros

// Move Zeroes
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

func MoveZeros(nums []int) {
	if len(nums) < 2 {
		return
	}

	slowPointer := 0

	for fastPointer := 0; fastPointer < len(nums); fastPointer++ {
		if nums[fastPointer] != 0 {
			nums[slowPointer] = nums[fastPointer]

			if slowPointer != fastPointer {
				nums[fastPointer] = 0
			}

			slowPointer++
		}
	}
}
