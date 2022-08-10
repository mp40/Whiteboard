package stack

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

func (s *Stack) GetLength() int {
	return len(s.Items);
}

func (s *Stack) Push(item int) (i int, ok bool) {
	if(s.GetCapacity() == s.GetLength()){
		return i, false;
	}

	s.Items = append(s.Items, item)

	return s.Items[s.GetLength() - 1], true;
}