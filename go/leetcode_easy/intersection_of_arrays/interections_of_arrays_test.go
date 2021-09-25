package interections_of_arrays

import (
	"testing"
)

func slicesContainEqualValues(got, want []int) bool {
	if len(got) != len(want) {
		return false
	}

	gotMap := make(map[int]int)
	wantMap := make(map[int]int)

	for _, i := range got {
		gotMap[i]++
	}

	for _, j := range got {
		wantMap[j]++
	}

	for gotMapKey, gotMapVal := range gotMap {
		if wantMap[gotMapKey] != gotMapVal {
			return false
		}
	}

	return true
}

func TestIntersect(t *testing.T) {
	assertCorrectValue := func(t testing.TB, got, want []int) {
		t.Helper()
		if slicesContainEqualValues(got, want) == false {
			t.Errorf("got %v want %v", got, want)
		}

	}

	t.Run("should be correct for long array compared to short array", func(t *testing.T) {
		nums1 := []int{1, 2, 2, 1}
		nums2 := []int{2, 2}

		got := Intersect(nums1, nums2)
		want := []int{2, 2}

		assertCorrectValue(t, got, want)
	})

	t.Run("should be correct for short array compared to long array", func(t *testing.T) {
		nums1 := []int{4, 9, 5}
		nums2 := []int{9, 4, 9, 8, 4}

		got := Intersect(nums1, nums2)
		want := []int{4, 9}

		assertCorrectValue(t, got, want)
	})

	t.Run("should be correct for long array compared to array of one number", func(t *testing.T) {
		nums1 := []int{1, 2, 2, 1}
		nums2 := []int{2}

		got := Intersect(nums1, nums2)
		want := []int{2}

		assertCorrectValue(t, got, want)
	})

	t.Run("should be correct for long array compared to array of one number", func(t *testing.T) {
		nums1 := []int{1}
		nums2 := []int{1, 2}

		got := Intersect(nums1, nums2)
		want := []int{1}

		assertCorrectValue(t, got, want)
	})
}
