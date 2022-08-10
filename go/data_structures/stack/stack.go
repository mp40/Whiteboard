package stack

// import ("fmt")

// TDD Stack
// push -> add to end of stack
// pop -> removes last element
// peek -> return last element of stack
// isEmpty -> return boolean
// isFull -> return boolean

type Stack struct {
	Capacity int
	Items []int
}

func (s *Stack) GetCapacity() int {
	return s.Capacity;
}

func (s *Stack) Push(item int) int {
	s.Items = append(s.Items, item)

	lastIndex := len(s.Items) - 1

	return s.Items[lastIndex];
}