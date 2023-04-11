struct Stack {
    capacity: u8
}

fn main() -> Stack {
   let stack = Stack {
    capacity: 3
   };

   return stack;
}

#[test]
fn test_capacity() {
    let stack = main();
    assert_eq!(stack.capacity, 3);
}