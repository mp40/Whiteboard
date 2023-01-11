// import { longestPalindrome } from ".";
import { longestPalindrome } from "./practice";

describe("finding longest palindrome", () => {
  it("should return 7 for abccccdd", () => {
    const input = "abccccdd";
    expect(longestPalindrome(input)).toBe(7);
  });

  it("should return 1 for a", () => {
    const input = "a";
    expect(longestPalindrome(input)).toBe(1);
  });

  it("should return 1 for aA", () => {
    const input = "aA";
    expect(longestPalindrome(input)).toBe(1);
  });

  it("should return 2 for aa", () => {
    const input = "aa";
    expect(longestPalindrome(input)).toBe(2);
  });
});
