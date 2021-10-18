package palindrome_number

import "testing"

func TestMissingNumber(t *testing.T) {
	assertCorrectValue := func(t testing.TB, got, want bool) {
		t.Helper()
		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	}

	t.Run("should return true if valid palindrome", func(t *testing.T) {
		x := 121

		got := IsPalindrome(x)
		want := true

		assertCorrectValue(t, got, want)
	})

	t.Run("should return false if not valid palindrome", func(t *testing.T) {
		x := 10

		got := IsPalindrome(x)
		want := false

		assertCorrectValue(t, got, want)
	})

	t.Run("should return false if negative number", func(t *testing.T) {
		x := -121

		got := IsPalindrome(x)
		want := false

		assertCorrectValue(t, got, want)
	})

}
