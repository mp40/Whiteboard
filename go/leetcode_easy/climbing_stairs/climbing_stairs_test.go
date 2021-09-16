package climbing_stairs

import "testing"

func TestClimbStairs(t *testing.T) {
	assertCorrectComboValue := func(t testing.TB, got, want int) {
		t.Helper()
		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	}

	t.Run("should return 2 combos for 2 steps", func(t *testing.T) {
		n := 2

		got := ClimbStairs(n)
		want := 2

		assertCorrectComboValue(t, got, want)
	})

	t.Run("should return 3 combos for 3 steps", func(t *testing.T) {
		n := 3

		got := ClimbStairs(n)
		want := 3

		assertCorrectComboValue(t, got, want)
	})

	t.Run("should return 8 combos from 5 steps", func(t *testing.T) {
		n := 5

		got := ClimbStairs(n)
		want := 8

		assertCorrectComboValue(t, got, want)
	})

	t.Run("should return combos for large even numbers", func(t *testing.T) {
		n := 42

		got := ClimbStairs(n)
		want := 433494437

		assertCorrectComboValue(t, got, want)
	})

	t.Run("should return combos for large odd numbers", func(t *testing.T) {
		n := 45

		got := ClimbStairs(n)
		want := 1836311903

		assertCorrectComboValue(t, got, want)
	})
}
