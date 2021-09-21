package contains_duplicate

import "testing"

func TestContainsDuplicate(t *testing.T) {
	assertCorrectBool := func(t testing.TB, got, want bool) {
		t.Helper()
		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	}

	t.Run("should return true if duplicates exist", func(t *testing.T) {
		nums := []int{1, 2, 3, 1}

		got := ContainsDuplicate(nums)
		want := true

		assertCorrectBool(t, got, want)
	})

	t.Run("should return false if no duplicates", func(t *testing.T) {
		nums := []int{1, 2, 3, 4}

		got := ContainsDuplicate(nums)
		want := false

		assertCorrectBool(t, got, want)
	})
}
