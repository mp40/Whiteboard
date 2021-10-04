package missing_number

import "testing"

func TestMissingNumber(t *testing.T) {
	assertCorrectValue := func(t testing.TB, got, want int) {
		t.Helper()
		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	}

	t.Run("should work for short arrays", func(t *testing.T) {
		nums := []int{3, 0, 1}

		got := MissingNumber(nums)
		want := 2

		assertCorrectValue(t, got, want)
	})

	t.Run("should work for longer arrays", func(t *testing.T) {
		nums := []int{9, 6, 4, 2, 3, 5, 7, 0, 1}

		got := MissingNumber(nums)
		want := 8

		assertCorrectValue(t, got, want)
	})

	t.Run("should work on very long arrays", func(t *testing.T) {
		nums := []int{45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32, 4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30, 25, 47, 0, 31, 42, 24, 10, 14}

		got := MissingNumber(nums)
		want := 18

		assertCorrectValue(t, got, want)
	})

	t.Run("should work when the last number is missing", func(t *testing.T) {
		nums := []int{0}

		got := MissingNumber(nums)
		want := 1

		assertCorrectValue(t, got, want)
	})

	t.Run("should work when the first number is missing", func(t *testing.T) {
		nums := []int{1}

		got := MissingNumber(nums)
		want := 0

		assertCorrectValue(t, got, want)
	})

	t.Run("should work when array is empty", func(t *testing.T) {
		nums := []int{}

		got := MissingNumber(nums)
		want := 0

		assertCorrectValue(t, got, want)
	})

}
