package max_sub_array

func MaxSubArray(nums []int) int {
	bestValue := nums[0]
	previousBest := nums[0]

	for i := 1; i < len(nums); i++ {
		currentValue := nums[i]

		if currentValue < currentValue+previousBest {
			previousBest = currentValue + previousBest
		} else {
			previousBest = currentValue
		}

		if previousBest > bestValue {
			bestValue = previousBest
		}
	}

	return bestValue
}
