package house_robber

import "testing"

func TestRob(t *testing.T) {
	assertCorrectValue := func(t testing.TB, got, want int) {
		t.Helper()
		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	}

	t.Run("should pass the first example", func(t *testing.T) {
		nums := []int{1, 2, 3, 1}

		got := Rob(nums)
		want := 4

		assertCorrectValue(t, got, want)
	})

	t.Run("should pass the second example", func(t *testing.T) {
		nums := []int{2, 7, 9, 3, 1}

		got := Rob(nums)
		want := 12

		assertCorrectValue(t, got, want)
	})

	t.Run("should return 0 for an empty array", func(t *testing.T) {
		nums := []int{}

		got := Rob(nums)
		want := 0

		assertCorrectValue(t, got, want)
	})
}
