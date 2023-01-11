// import { validPalindrome } from ".";
import { validPalindrome } from "./practice";

describe("detrimine valid palindrome", () => {
  it("should return true for aba", () => {
    const input = "aba";
    expect(validPalindrome(input)).toBe(true);
  });

  it("should return true for abca", () => {
    const input = "abca";
    expect(validPalindrome(input)).toBe(true);
  });

  it("should return false for abc", () => {
    const input = "abc";
    expect(validPalindrome(input)).toBe(false);
  });

  it("should return true for deeee", () => {
    const input = "deeee";
    expect(validPalindrome(input)).toBe(true);
  });

  it("should return true for long palindrome strings", () => {
    const input =
      "vmpmofafcwfoycbtjjdeklsbvhqwpdfqalnjwzhliyuovedxvgygayobytuvlieicrlllrniwtvgzaxbezvwiarbqphtmtqrzcktfkdphgmbxvqufcbmbhtaekloljgmsxjemzpyxfwbyiqcomczxwgdrtyicjcizbjvhrurlvzkvshdizquvnigxvofuygkqirszejsmhotmpwjuvjluttckswmmsfkgwrqiijwikxucpjxkmqvpjnjjxxjjnjpvqmkxjpcuxkiwjiiqrwgkfsmmwskcttuljvujwpmtohmsjezsriqkgyufovxginvuqzidhsvkzvlrurhvjbzicjciytrdgwxzcmocqiybwfxypzmejxsmgjlolkeathbmbcfuqvxbmghpdkftkczrqtmthpqbraiwvzebxazgvtwinrlllrcieilvutyboyagygvxdevouyilhzwjnlaqfdpwqhvbslkedjjtbcyofwcfafompmv";

    expect(validPalindrome(input)).toBe(true);
  });
});
