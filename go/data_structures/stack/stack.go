package stack

// TDD Stack
// pop -> removes last element

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

func (s *Stack) Peek() (int) {
	return s.Items[s.GetLength() - 1]
}

func (s *Stack) IsEmpty() (bool) {
	length := s.GetLength()

	if(length != 0) {
		return false;
	}

	return true;
}

func (s *Stack) IsFull() (bool) {
	length := s.GetLength()
	capacity := s.GetCapacity()

	if(length != capacity) {
		return false;
	}

	return true;
}