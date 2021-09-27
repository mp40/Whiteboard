package longest_common_prefix

import "testing"

func TestLongestCommonPrefix(t *testing.T) {
	assertCorrectValue := func(t testing.TB, got, want string) {
		t.Helper()
		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	}

	t.Run("should return 'fl' for ['flower','flow','flight']", func(t *testing.T) {
		strs := []string{"flower", "flow", "flight"}

		got := LongestCommonPrefix(strs)
		want := "fl"

		assertCorrectValue(t, got, want)
	})

	t.Run("should return '' for ['dog','racecar','car']", func(t *testing.T) {
		strs := []string{"dog", "racecar", "car"}

		got := LongestCommonPrefix(strs)
		want := ""

		assertCorrectValue(t, got, want)
	})

	t.Run("should return 'a' for ['a']", func(t *testing.T) {
		strs := []string{"a"}

		got := LongestCommonPrefix(strs)
		want := "a"

		assertCorrectValue(t, got, want)
	})

	t.Run("should return '' for ['', '']", func(t *testing.T) {
		strs := []string{"", ""}

		got := LongestCommonPrefix(strs)
		want := ""

		assertCorrectValue(t, got, want)
	})

	t.Run("should return 'c' for ['c', 'c']", func(t *testing.T) {
		strs := []string{"c", "c"}

		got := LongestCommonPrefix(strs)
		want := "c"

		assertCorrectValue(t, got, want)
	})

	t.Run("should return '' for ['a', 'b']", func(t *testing.T) {
		strs := []string{"a", "b"}

		got := LongestCommonPrefix(strs)
		want := ""

		assertCorrectValue(t, got, want)
	})

	t.Run("should return 'aa' for ['aaa', 'aa', 'aaa']", func(t *testing.T) {
		strs := []string{"aaa", "aa", "aaa"}

		got := LongestCommonPrefix(strs)
		want := "aa"

		assertCorrectValue(t, got, want)
	})

	t.Run("should return '' for an empty array", func(t *testing.T) {
		strs := []string{}

		got := LongestCommonPrefix(strs)
		want := ""

		assertCorrectValue(t, got, want)
	})
}
