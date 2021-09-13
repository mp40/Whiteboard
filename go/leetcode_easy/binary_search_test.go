package binary_search

import "testing"

func TestSearch(t *testing.T) {
	assertCorrectIndexValue := func(t testing.TB, got, want int) {
		t.Helper()
		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	}

	array := []int{-1, 0, 3, 5, 9, 12}

	t.Run("return index of low value target", func(t *testing.T) {
		target := 0

		got := Search(array, target)
		want := 1

		assertCorrectIndexValue(t, got, want)
	})

	t.Run("should return index of high value target", func(t *testing.T) {
		target := 9

		got := Search(array, target)
		want := 4

		assertCorrectIndexValue(t, got, want)
	})

	t.Run("should return -1 if target not in array", func(t *testing.T) {
		target := 2

		got := Search(array, target)
		want := -1

		assertCorrectIndexValue(t, got, want)
	})

	t.Run("should find target in length 1 array", func(t *testing.T) {
		lenOneArray := []int{5}
		target := 5

		got := Search(lenOneArray, target)
		want := 0

		assertCorrectIndexValue(t, got, want)
	})

	t.Run("should find target in length 2 array", func(t *testing.T) {
		lenTwoArray := []int{2, 5}
		target := 5

		got := Search(lenTwoArray, target)
		want := 1

		assertCorrectIndexValue(t, got, want)
	})
}
