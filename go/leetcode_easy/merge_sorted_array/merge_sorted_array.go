package merge_sorted_array

func Merge(nums1 []int, m int, nums2 []int, n int) {
	end := len(nums1) - 1
	m -= 1
	n -= 1

	for n >= 0 {
		if m >= 0 && nums1[m] > nums2[n] {
			nums1[end] = nums1[m]
			m -= 1
		} else {
			nums1[end] = nums2[n]
			n -= 1
		}

		end -= 1
	}
}
