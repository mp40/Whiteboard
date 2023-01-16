import { firstPalindrome } from ".";

describe("finding first palindrome in array", () => {
  it("should return ada", () => {
    const input = ["abc", "car", "ada", "racecar", "cool"];
    expect(firstPalindrome(input)).toBe("ada");
  });

  it("should return racecar", () => {
    const input = ["notapalindrome", "racecar"];
    expect(firstPalindrome(input)).toBe("racecar");
  });

  it("should return empty string if no palindrome", () => {
    const input = ["def", "ghi"];
    expect(firstPalindrome(input)).toBe("");
  });
});
