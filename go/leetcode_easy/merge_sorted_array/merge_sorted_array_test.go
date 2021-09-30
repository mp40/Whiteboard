package merge_sorted_array

import (
	"reflect"
	"testing"
)

func TestMerge(t *testing.T) {
	assertCorrectValue := func(t testing.TB, got, want []int) {
		t.Helper()
		if reflect.DeepEqual(got, want) == false {
			t.Errorf("got %v want %v", got, want)
		}
	}

	t.Run("should merge two sorted arrays", func(t *testing.T) {
		nums1 := []int{1, 2, 3, 0, 0, 0}
		m := 3
		nums2 := []int{2, 5, 6}
		n := 3

		Merge(nums1, m, nums2, n)

		want := []int{1, 2, 2, 3, 5, 6}
		got := nums1

		assertCorrectValue(t, got, want)
	})

	t.Run("should merge two sorted arrays when m equals 0", func(t *testing.T) {
		nums1 := []int{0}
		m := 0
		nums2 := []int{1}
		n := 1

		Merge(nums1, m, nums2, n)

		want := []int{1}
		got := nums1

		assertCorrectValue(t, got, want)
	})

	t.Run("should merge two sorted arrays when m and n equals 1", func(t *testing.T) {
		nums1 := []int{2, 0}
		m := 1
		nums2 := []int{1}
		n := 1

		Merge(nums1, m, nums2, n)

		want := []int{1, 2}
		got := nums1

		assertCorrectValue(t, got, want)
	})
}
