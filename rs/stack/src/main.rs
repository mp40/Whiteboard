struct Stack {
    capacity: u8,
    items: Vec<i32>
}

impl Stack {
    fn is_empty(&self) -> bool {
        return true;
    }

    fn is_full(&self) -> bool {
        return false;
    }

    fn push(&self, item:i32) -> i32 {
        return item;
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
    assert_eq!(stack.is_full(), false)
}

#[test]
fn test_items() {
    let stack = main();
    assert_eq!(stack.items.len(), 0);
}

#[test]
fn test_push_item() {
    let stack = main();
    assert_eq!(stack.push(1), 1)
}