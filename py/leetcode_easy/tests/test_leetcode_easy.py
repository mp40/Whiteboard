import pytest
import unittest

# from leetcode_easy import binary_search, buy_sell_stock, buy_sell_stock_two, climbing_stairs
# from leetcode_easy import *
# dir_path = ./
# import * from leetcode_easy

# ----------------------------------------------
# parametrized test function for binary_search
# ----------------------------------------------
# Binary Search
# https://leetcode.com/problems/binary-search/
from leetcode_easy import binary_search

search_products = [
    ([-1, 0, 3, 5, 9, 12], 0, 1),        # return index of low value target
    ([-1, 0, 3, 5, 9, 12], 9, 4),        # return index of high value target
    ([-1, 0, 3, 5, 9, 12], 2, -1),       # return -1 if target not in list
    ([5], 5, 0),                         # find target in length 1 list
    ([2, 5], 5, 1),                      # find target in length 2 list
]    

@pytest.mark.parametrize('nums, target, output', search_products)
def test_search(nums, target, output):
    assert binary_search.search(nums, target) == output

# ----------------------------------------------
# parametrized test function for buy_sell_stock
# ----------------------------------------------
# Best Time to Buy and Sell Stock
# https://leetcode.com/explore/featured/card/top-interview-questions-easy/97/dynamic-programming/572/
from leetcode_easy import buy_sell_stock

buy_sell_stock_products = [
    ([7, 1, 5, 3, 6, 4], 5), # return correct result for unsorted list
    ([7, 6, 4, 3, 1], 0)     # return correct result for list of decending values
]

@pytest.mark.parametrize('prices, output', buy_sell_stock_products)
def test_buy_sell_stock(prices, output):
    assert buy_sell_stock.maxProfit(prices) == output

# -------------------------------------------------
# parametrized test function for buy_sell_stock_two
# -------------------------------------------------    
# Best Time to Buy and Sell Stock II
# https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/    
from leetcode_easy import buy_sell_stock_two

buy_sell_stock_two_products = [
    ([7, 1, 5, 3, 6, 4], 7), # return correct result for unsorted list
    ([1, 2, 3, 4, 5], 4),    # return correct result for list of ascending values
    ([7, 6, 4, 3, 1], 0)     # return correct result for list of decending values
]

@pytest.mark.parametrize('prices, output', buy_sell_stock_two_products)
def test_buy_sell_stock_two(prices, output):
    assert buy_sell_stock_two.maxProfit(prices) == output

# -----------------------------------------------
# parametrized test function for climbing_stairs
# -----------------------------------------------
# Climbing Stairs
# https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/569/
from leetcode_easy import climbing_stairs

climbing_stairs_products = [
    (2, 2),          # return 2 combos for 2 steps
    (3, 3),          # return 3 combos for 3 steps
    (5, 8),          # return 8 combos from 5 steps
    (42, 433494437), # return combos for large even numbers
    (45, 1836311903) # return combos for large odd numbers
]

@pytest.mark.parametrize('n, output', climbing_stairs_products)
def test_climbing_stairs(n, output):
    assert climbing_stairs.climbStairs(n) == output

# -----------------------------------------------
# parametrized test function for contains_duplicate
# -----------------------------------------------
# Contains Duplicate
# https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/ 

from leetcode_easy import contains_duplicate

contains_duplicate_products = [
    ([1, 2, 3, 1], True),  # return true if duplicate exists
    ([1, 2, 3, 4], False)  # return false if no duplicates
]

@pytest.mark.parametrize('nums, output', contains_duplicate_products)
def test_contains_duplicate(nums, output):
    assert contains_duplicate.containsDuplicate(nums) == output

@pytest.mark.parametrize('nums, output', contains_duplicate_products)
def test_contains_duplicate_iterative(nums, output):
    assert contains_duplicate.containsDuplicateIterativeVersion(nums) == output

# --------------------------------------------
# parametrized test function for house_robber
# --------------------------------------------
# House Robber
# https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/576/

from leetcode_easy import house_robber

house_robber_products = [
    ([1, 2, 3, 1], 4),
    ([2, 7, 9, 3, 1], 12),
    ([], 0)
]

@pytest.mark.parametrize('nums, output', house_robber_products)
def test_contains_duplicate(nums, output):
    assert house_robber.rob(nums) == output

# --------------------------------------------
# parametrized test function for intersection_of_arrays
# --------------------------------------------
# Intersection of Two Arrays II
# https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

from leetcode_easy import intersection_of_arrays

intersection_of_arrays_products = [
    ([1, 2, 2, 1], [2, 2], [2, 2]),       # long array compared to short array
    ([4, 9, 5], [9, 4, 9, 8, 4], [4, 9]), # short array compared to long array
    ([1, 2, 2, 1], [2], [2]),             # long array compared to array of one number
    ([1], [1, 2], [1])                    # one number compared to short array
]

@pytest.mark.parametrize('nums1, nums2, output', intersection_of_arrays_products)
def test_intersection_of_arrays(nums1, nums2, output):
    case = unittest.TestCase()
    case.assertCountEqual(intersection_of_arrays.intersect(nums1, nums2), output)

# -----------------------------------------------
# parametrized test function for last_word_length
# -----------------------------------------------
# Length of Last Word 
# https://leetcode.com/problems/length-of-last-word/

from leetcode_easy import last_word_length

last_word_length_products = [
    ("Hello World", 5),
    ("Hello Biggles", 7),
    ("", 0),
    ("a ", 1),
    ("b   a    ", 1),
    (" ", 0)
]

@pytest.mark.parametrize('s, output', last_word_length_products)
def test_last_word_length(s, output):
    assert last_word_length.lengthOfLastWord(s) == output

# ----------------------------------------------------
# parametrized test function for longest_common_prefix
# ----------------------------------------------------
# Longest Common Prefix 
# https://leetcode.com/problems/longest-common-prefix/

from leetcode_easy import longest_common_prefix

longest_common_prefix_products = [
    (["flower", "flow", "flight"], "fl"),
    (["dog", "racecar", "car"], ""),
    (["a"], "a"),
    (["", ""], ""),
    (["c", "c"], "c"),
    (["a", "b"], ""),
    (["aaa", "aa", "aaa"], "aa"),
    ([], "")
]

@pytest.mark.parametrize('strs, output', longest_common_prefix_products)
def test_longest_common_prefix(strs, output):
    assert longest_common_prefix.longestCommonPrefix(strs) == output

# -----------------------------------------------
# parametrized test function for max_sub_array
# -----------------------------------------------
# Maximum Subarray
# https://leetcode.com/problems/maximum-subarray/

from leetcode_easy import max_sub_array

max_sub_array_products = [
    ([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6),
    ([1, 2], 3),
    ([-2, -1], -1),
    ([-1, -2], -1),

]

@pytest.mark.parametrize('nums, output', max_sub_array_products)
def test_max_sub_array(nums, output):
    assert max_sub_array.maxSubArray(nums) == output

# -------------------------------------------------
# parametrized test function for merge_sorted_array
# -------------------------------------------------
# Merge Sorted Array
# https://leetcode.com/problems/merge-sorted-array/

from leetcode_easy import merge_sorted_array

merge_sorted_array_products = [
    ([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]),  # merge two sorted arrays
    ([0], 0, [1], 1, [1]),                                      # merge two sorted arrays when m equals 0
    ([2, 0], 1, [1], 1, [1, 2]),                                # merge two sorted arrays when m and n equals 1

]

@pytest.mark.parametrize('nums1, m, nums2, n, result', merge_sorted_array_products)
def test_max_sub_array(nums1, m, nums2, n, result):
    merge_sorted_array.merge(nums1, m, nums2, n)
    assert nums1 == result

# -------------------------------------------------
# parametrized test function for missing_number
# -------------------------------------------------
# Missing Number
# https://leetcode.com/problems/missing-number/

from leetcode_easy import missing_number

missing_number_products = [
    ([3, 0, 1], 2), 
    ([9, 6, 4, 2, 3, 5, 7, 0, 1], 8),   
    ([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14], 18),
    ([0], 1),
    ([1], 0),
    ([], 0)
]

@pytest.mark.parametrize('nums, output', missing_number_products)
def test_max_sub_array(nums, output):
    assert missing_number.missingNumber(nums) == output

# -------------------------------------------------
# parametrized test function for move_zeros
# -------------------------------------------------
# Move Zeroes
# https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/


from leetcode_easy import move_zeros

move_zeros_products = [
    ([0,1,0,3,12], [1,3,12,0,0]),   # example
    ([], []),                       # empty lists
    ([1], [1]),                     # length 1 list with value 1
    ([0], [0]),                     # length 1 list with value 0
    ([1,0], [1,0]),                 # length 2 list starting with 1 and ending with 0
    ([0,1], [1,0])                  # should work on length 2 array starting with 0 and ending with 1
]

@pytest.mark.parametrize('nums, result', move_zeros_products)
def test_move_zeros(nums, result):
    move_zeros.moveZeros(nums)
    assert nums == result

# -------------------------------------------------
# parametrized test function for palindrome_number
# -------------------------------------------------
# Palindrome Number
# https://leetcode.com/problems/palindrome-number/   

from leetcode_easy import palindrome_number

palindrome_number_products = [
    (121, True), 
    (10, False),   
    (-121, False),
    (11, True)
]

@pytest.mark.parametrize('x, output', palindrome_number_products)
def test_palindrome_number(x, output):
    assert palindrome_number.isPalindrome(x) == output

# -------------------------------------------------
# parametrized test function for pascals_triangle
# -------------------------------------------------
# Pascal's Triangle
# https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/601/ 

from leetcode_easy import pascals_triangle

pascals_triangle_products = [
    (0, []), 
    (1, [[1]]),   
    (2, [[1], [1, 1]]),
    (3, [[1], [1, 1], [1, 2, 1]]),
    (4, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]),
    (5, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]])
]

@pytest.mark.parametrize('numRows, output', pascals_triangle_products)
def test_palindrome_number(numRows, output):
    assert pascals_triangle.generate(numRows) == output