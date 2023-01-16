// import {isPalindrome} from '.';
import { isPalindrome } from "./practice";

describe("determine if interger is palindrome", () => {
  it("should return true if valid palindrome", () => {
    const input = 121;
    const output = true;
    expect(isPalindrome(input)).toBe(output);
  });

  it("should return false if not valid palindrome", () => {
    const input = 123;
    const output = false;
    expect(isPalindrome(input)).toBe(output);
  });

  it("should return true for zero", () => {
    const input = 0;
    const output = true;
    expect(isPalindrome(input)).toBe(output);
  });

  it("should return true for single digit numbers", () => {
    const input = 1;
    const output = true;
    expect(isPalindrome(input)).toBe(output);
  });

  it("should return false if ends in zero", () => {
    const input = 10;
    const output = false;
    expect(isPalindrome(input)).toBe(output);
  });

  it("should return false if negative number", () => {
    const input = -121;
    const output = false;
    expect(isPalindrome(input)).toBe(output);
  });
});
