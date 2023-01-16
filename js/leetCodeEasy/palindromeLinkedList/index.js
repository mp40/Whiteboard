// 234. Palindrome Linked List
// https://leetcode.com/problems/palindrome-linked-list/

/*
Given the head of a singly linked list, 
return true if it is a palindrome
or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false

Constraints:
The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 

Follow up: 
Could you do it in O(n) time and O(1) space?
*/

export function isPalindrome(head) {
  const list = [];

  let current = head;
  while (current) {
    list.push(current.val);
    current = current.next;
  }

  let start = 0;
  let end = list.length - 1;

  while (start < end) {
    if (list[start] !== list[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

export function isPalindromeOhEn(head) {}
