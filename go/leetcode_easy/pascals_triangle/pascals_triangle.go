package pascals_triangle

func Generate(numRows int) [][]int {
	if numRows == 0 {
		return [][]int{{}}
	}

	if numRows == 1 {
		return [][]int{{1}}
	}

	result := [][]int{{1}}

	for i := 1; i < numRows; i++ {
		last := result[i-1]
		next := []int{1}

		for j := 1; j < len(last); j++ {
			next = append(next, last[j-1]+last[j])
		}

		next = append(next, 1)
		result = append(result, next)
	}

	return result
}
