package interections_of_arrays

// Intersection of Two Arrays II
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

func Intersect(nums1 []int, nums2 []int) []int {
	m := make(map[int]int)
	results := make([]int, 0)

	for i := 0; i < len(nums1); i++ {
		if _, ok := m[nums1[i]]; ok {
			m[nums1[i]] += 1
		} else {
			m[nums1[i]] = 1
		}
	}

	for i := 0; i < len(nums2); i++ {
		if _, ok := m[nums2[i]]; ok {
			if m[nums2[i]] > 0 {
				m[nums2[i]] -= 1
				results = append(results, nums2[i])
			}
		}
	}

	return results
}
