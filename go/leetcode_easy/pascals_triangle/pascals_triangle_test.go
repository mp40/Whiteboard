package pascals_triangle

import (
	"reflect"
	"testing"
)

func TestGenerate(t *testing.T) {
	assertCorrectValue := func(t testing.TB, got, want [][]int) {
		t.Helper()
		if reflect.DeepEqual(got, want) == false {
			t.Errorf("got %v want %v", got, want)
		}
	}

	t.Run("should return correct answer for input 0", func(t *testing.T) {
		numRows := 0

		got := Generate(numRows)
		want := [][]int{{}}

		assertCorrectValue(t, got, want)
	})

	t.Run("should return correct answer for input 1", func(t *testing.T) {
		numRows := 1

		got := Generate(numRows)
		want := [][]int{{1}}

		assertCorrectValue(t, got, want)
	})

	t.Run("should return correct answer for input 2", func(t *testing.T) {
		numRows := 2

		got := Generate(numRows)
		want := [][]int{{1}, {1, 1}}

		assertCorrectValue(t, got, want)
	})

	t.Run("should return correct answer for input 3", func(t *testing.T) {
		numRows := 3

		got := Generate(numRows)
		want := [][]int{{1}, {1, 1}, {1, 2, 1}}

		assertCorrectValue(t, got, want)
	})

	t.Run("should return correct answer for input 4", func(t *testing.T) {
		numRows := 4

		got := Generate(numRows)
		want := [][]int{{1}, {1, 1}, {1, 2, 1}, {1, 3, 3, 1}}

		assertCorrectValue(t, got, want)
	})

	t.Run("should return correct answer for input 5", func(t *testing.T) {
		numRows := 5

		got := Generate(numRows)
		want := [][]int{{1}, {1, 1}, {1, 2, 1}, {1, 3, 3, 1}, {1, 4, 6, 4, 1}}

		assertCorrectValue(t, got, want)
	})
}
