package max_sub_array

import "testing"

func TestMaxSubArray(t *testing.T) {
	assertCorrectValue := func(t testing.TB, got, want int) {
		t.Helper()
		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	}

	t.Run("should return correct value for long array of postivite and negitive numbers", func(t *testing.T) {
		nums := []int{-2, 1, -3, 4, -1, 2, 1, -5, 4}

		got := MaxSubArray(nums)
		want := 6

		assertCorrectValue(t, got, want)
	})

	t.Run("should return correct value for short array of positive numbers", func(t *testing.T) {
		nums := []int{1, 2}

		got := MaxSubArray(nums)
		want := 3

		assertCorrectValue(t, got, want)
	})

	t.Run("should return correct value for two negitive numbers with smaller first", func(t *testing.T) {
		nums := []int{-2, -1}

		got := MaxSubArray(nums)
		want := -1

		assertCorrectValue(t, got, want)
	})

	t.Run("should return correct value for two negitive numbers with larger first", func(t *testing.T) {
		nums := []int{-1, -2}

		got := MaxSubArray(nums)
		want := -1

		assertCorrectValue(t, got, want)
	})

}
