package move_zeros

import (
	"reflect"
	"testing"
)

func TestMoveZeros(t *testing.T) {
	assertCorrectValue := func(t testing.TB, got, want []int) {
		t.Helper()
		if reflect.DeepEqual(got, want) == false {
			t.Errorf("got %v want %v", got, want)
		}
	}

	t.Run("should work on the example", func(t *testing.T) {
		nums := []int{0, 1, 0, 3, 12}

		MoveZeros(nums)
		got := nums
		want := []int{1, 3, 12, 0, 0}

		assertCorrectValue(t, got, want)
	})

	t.Run("should work on empty arrays", func(t *testing.T) {
		nums := []int{}

		MoveZeros(nums)
		got := nums
		want := []int{}

		assertCorrectValue(t, got, want)
	})

	t.Run("should work on length 1 array with value 1", func(t *testing.T) {
		nums := []int{1}

		MoveZeros(nums)
		got := nums
		want := []int{1}

		assertCorrectValue(t, got, want)
	})

	t.Run("should work on length 1 array with value 0", func(t *testing.T) {
		nums := []int{0}

		MoveZeros(nums)
		got := nums
		want := []int{0}

		assertCorrectValue(t, got, want)
	})

	t.Run("should work on length 2 array starting with 1 and ending with 0", func(t *testing.T) {
		nums := []int{1, 0}

		MoveZeros(nums)
		got := nums
		want := []int{1, 0}

		assertCorrectValue(t, got, want)
	})

	t.Run("should work on length 2 array starting with 0 and ending with 1", func(t *testing.T) {
		nums := []int{0, 1}

		MoveZeros(nums)
		got := nums
		want := []int{1, 0}

		assertCorrectValue(t, got, want)
	})

}
