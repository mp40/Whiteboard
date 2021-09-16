package climbing_stairs

// Climbing Stairs
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/569/

func ClimbStairs(n int) int {
	if n < 4 {
		return n
	}

	beforeLast := 2
	last := 3

	for i := 4; i < n; i++ {
		result := last + beforeLast
		beforeLast = last
		last = result
	}

	return beforeLast + last
}
