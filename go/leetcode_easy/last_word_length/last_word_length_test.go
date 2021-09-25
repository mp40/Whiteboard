package last_word_length

import "testing"

func TestRob(t *testing.T) {
	assertCorrectValue := func(t testing.TB, got, want int) {
		t.Helper()
		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	}

	t.Run("should return length of last word in string", func(t *testing.T) {
		s := "Hello World"

		got := LengthOfLastWord(s)
		want := 5

		assertCorrectValue(t, got, want)
	})

	t.Run("should return length of last word in string", func(t *testing.T) {
		s := "Hello Biggles"

		got := LengthOfLastWord(s)
		want := 7

		assertCorrectValue(t, got, want)
	})

	t.Run("should return 0 if no last word", func(t *testing.T) {
		s := ""

		got := LengthOfLastWord(s)
		want := 0

		assertCorrectValue(t, got, want)
	})

	t.Run("should ignore white space at end of string", func(t *testing.T) {
		s := "a "

		got := LengthOfLastWord(s)
		want := 1

		assertCorrectValue(t, got, want)
	})

	t.Run("should ignore random white space", func(t *testing.T) {
		s := "b  a  "

		got := LengthOfLastWord(s)
		want := 1

		assertCorrectValue(t, got, want)
	})

	t.Run("should return 0 for string containing only white space", func(t *testing.T) {
		s := " "

		got := LengthOfLastWord(s)
		want := 0

		assertCorrectValue(t, got, want)
	})
}
