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