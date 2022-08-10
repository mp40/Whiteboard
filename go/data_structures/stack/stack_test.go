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

	t.Run("Push returns last element of stack", func(t *testing.T) {
		stack := Stack{Capacity: 3, Items: []int{1, 2}}

		got, _ := stack.Push(3)
		want := 3

		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	})

	t.Run("Push returns false is stack full", func(t *testing.T) {
		stack := Stack{Capacity: 3, Items: []int{1, 2, 3}}

		_, got := stack.Push(4)
		want := false

		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	})

	t.Run("Peek returns value of last item", func(t *testing.T) {
		stack := Stack{Capacity: 3, Items: []int{1, 2}}

		got := stack.Peek()
		want := 2

		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	})

	t.Run("IsEmpty returns true if empty", func(t *testing.T) {
		stack := Stack{Capacity: 3, Items: []int{}}

		got := stack.IsEmpty()
		want := true

		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	})

	t.Run("IsEmpty returns false if not empty", func(t *testing.T) {
		stack := Stack{Capacity: 3, Items: []int{1, 2}}

		got := stack.IsEmpty()
		want := false

		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	})

	t.Run("IsFull returns true if full", func(t *testing.T) {
		stack := Stack{Capacity: 3, Items: []int{1, 2, 3}}

		got := stack.IsFull()
		want := true

		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	})

	t.Run("IsFull returns false if not full", func(t *testing.T) {
		stack := Stack{Capacity: 3, Items: []int{1, 2}}

		got := stack.IsFull()
		want := false

		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	})
}