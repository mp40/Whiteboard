// Permutation in String
// https://leetcode.com/problems/permutation-in-string/

/*
Given two strings s1 and s2,
write a function to return true if s2 contains the permutation of s1.
In other words, one of the first string's permutations
is the substring of the second string.

Example 1:
Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
-----
Example 2:
Input: s1= "ab" s2 = "eidboaoo"
Output: False
-----
Note:
The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].
*/

/**
 * param {string} s1
 * param {string} s2
 * return {boolean}
 */
export const checkInclusion = (s1, s2) => {
    if(s1.length > s2.length) {
        return false;
    }

    const s1Map = {};
    const s2Map = {};

    for(let i = 0; i < s1.length; i++) {
        s1Map[s1[i]] = s1Map[s1[i]] + 1 || 1;
    }

    // array of letters in s1Map
    const letters = Object.keys(s1Map);

    for(let i = 0; i < s2.length; i++) {
        if(i >= s1.length) {
            s2Map[s2[i-s1.length]] -= 1;
        }

        // increment the count for the letter we're currently looking at
        s2Map[s2[i]] = s2Map[s2[i]] + 1 || 1;

          // test for a match
        let match = true;
        for (let j = 0; j < letters.length; j++) {
          if (s1Map[letters[j]] !== s2Map[letters[j]]) {
            match = false;
            break;
          }
        }
        if (match) {
          return true
        }
    }

    return false;
};

/*
https://stackoverflow.com/questions/45316487/find-all-permutations-of-smaller-string-s-in-string-b-javascript
function countAnagramOccurrences(s, b) {
  var matchCount = 0;

  var sCounts = {}; // counts for the letters in s
  var bCounts = {}; // counts for the letters in b

  // construct sCounts
  for (var i = 0; i < s.length; i++) {
    sCounts[s[i]] = (sCounts[s[i]] || 0) + 1;
  }

  // all letters that occur in sCounts
  var letters = Object.keys(sCounts);

  // for each letter in b
  for (var i = 0; i < b.length; i++) {
    // maintain a sliding window
    // if we already have s.length items in the counts, remove the oldest one
    if (i >= s.length) {
      bCounts[b[i-s.length]] -= 1;
    }
    // increment the count for the letter we're currently looking at
    bCounts[b[i]] = (bCounts[b[i]] || 0) + 1;

    // test for a match (b counts == s counts)
    var match = true;
    for (var j = 0; j < letters.length; j++) {
      if (sCounts[letters[j]] !== bCounts[letters[j]]) {
        match = false;
        break;
      }
    }
    if (match) {
      matchCount += 1;
    }
  }
    return matchCount;
}
*/