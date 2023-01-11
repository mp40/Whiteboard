import { removePalindromeSub } from ".";
// import { removePalindromeSub } from "./practice";

describe("removing palindromic subsequences", () => {
  it("should return 1 for ababa", () => {
    const input = "ababa";

    expect(removePalindromeSub(input)).toBe(1);
  });

  it("should return 2 for abb", () => {
    const input = "abb";

    expect(removePalindromeSub(input)).toBe(2);
  });

  it("should return 2 for baabb", () => {
    const input = "baabb";

    expect(removePalindromeSub(input)).toBe(2);
  });
});
