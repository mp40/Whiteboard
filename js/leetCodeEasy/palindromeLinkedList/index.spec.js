// import { isPalindrome } from ".";
import { isPalindromeOhEn as isPalindrome } from ".";

describe("palindrome linked list", () => {
  it("should return true for list [1, 2, 2, 1]", () => {
    const list = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 2,
          next: {
            val: 1,
            next: undefined,
          },
        },
      },
    };

    expect(isPalindrome(list)).toBe(true);
  });

  it("should return false for list [1, 2]", () => {
    const list = {
      val: 1,
      next: {
        val: 2,
        next: undefined,
      },
    };

    expect(isPalindrome(list)).toBe(false);
  });
});
