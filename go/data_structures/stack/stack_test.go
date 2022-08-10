package stack

import "testing"

func TestStack(t *testing.T) {

	t.Run("Stack Capacity", func(t *testing.T) {
		stack := Stack{Capacity: 3, Items: []int{}}
		got := stack.GetCapacity()
		want := 3

		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	})

	t.Run("Push adds element to empty stack", func(t *testing.T) {
		stack := Stack{Capacity: 3, Items: []int{}}
		stack.Push(1)
		got := stack.Items[0]
		want := 1

		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	})

	t.Run("Push adds element to end of stack", func(t *testing.T) {
		stack := Stack{Capacity: 3, Items: []int{1}}
		stack.Push(2)
		got := stack.Items[1]
		want := 2

		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	})
}