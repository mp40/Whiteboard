// import { isPalindrome } from './validPalindrome';
import { isPalindrome } from "./practice";

describe("checking  palindrome", () => {
  it("should be correct for first example", () => {
    const input = "A man, a plan, a canal: Panama";
    expect(isPalindrome(input)).toBe(true);
  });
  it("should be correct for second example", () => {
    const input = "race a car";
    expect(isPalindrome(input)).toBe(false);
  });
  it("does not treat underscorce as alpha-numeric", () => {
    const input = "ab_a";
    expect(isPalindrome(input)).toBe(true);
  });
});
