struct Stack {
    capacity: u8,
    items: Vec<i32>
}

impl Stack {
    fn is_empty(&self) -> bool {
        if self.items.len() > 0 {
            return false;
        }
        return true;
    }

    fn is_full(&self) -> bool {
        if (self.items.len() as u8) < self.capacity {
            return false;
        }
        return true;
    }

    fn push(&mut self, item:i32) -> Result<i32, &'static str> {
        if self.is_full() {
            return Err("Full")
        }

        self.items.push(item);
        return Ok(item);
    }

    fn pop(&mut self) -> Result<i32, &'static str> {
        if self.is_empty() {
            return Err("Empty");
        }

        return Ok(self.items.pop().unwrap())
    }

    fn peek(&self) -> Result<i32, &'static str> {
        if self.is_empty() {
            return Err("Empty");
        }

        return Ok(self.items[self.items.len() - 1]);
    }
}

fn main() -> Stack {
   let stack = Stack {
    capacity: 3,
    items: Vec::new()
   };

   return stack;
}

#[test]
fn test_capacity() {
    let stack = main();
    assert_eq!(stack.capacity, 3);
}

#[test]
fn test_is_empty() {
    let stack = main();
    assert_eq!(stack.is_empty(), true);
}

#[test]
fn test_is_full() {
    let stack = main();
    assert_eq!(stack.is_full(), false);
}

#[test]
fn test_items() {
    let stack = main();
    assert_eq!(stack.items.len(), 0);
}

#[test]
fn test_push_item() {
    let mut stack = main();
    assert_eq!(stack.push(1), Ok(1))
}

#[test]
fn test_pop_item_on_empty_list() {
    let mut stack = main();
    assert_eq!(stack.pop(), Err("Empty"));
}

#[test]
fn test_peek_last_item_empty_array() {
    let stack = main();
    assert_eq!(stack.peek(), Err("Empty"));
}

#[test]
fn test_peek_last_item_full_array() {
    let mut stack = main();
    stack.items = vec![2, 4, 6];
    assert_eq!(stack.peek(), Ok(6));
    assert_eq!(stack.items.len(), 3);
}

#[test]
fn test_intergration_push_pop() {
    let mut stack = main();
    assert_eq!(stack.push(5), Ok(5));
    assert_eq!(stack.pop(), Ok(5));
}

#[test]
fn test_intergration_push_to_full_stack() {
    let mut stack = main();
    stack.items = vec![1, 2, 3];
    assert_eq!(stack.push(4), Err("Full"));
}