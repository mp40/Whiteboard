# Binary Search
# https://leetcode.com/problems/binary-search/

import pytest

from leetcode_easy import binary_search

# ----------------------------------------------
# parametrized test function for binary_search
# ----------------------------------------------

products = [
    ([-1, 0, 3, 5, 9, 12], 0, 1),        # return index of low value target
    ([-1, 0, 3, 5, 9, 12], 9, 4),        # return index of high value target
    ([-1, 0, 3, 5, 9, 12], 2, -1),       # return -1 if target not in array
    ([5], 5, 0),                         # find target in length 1 array
    ([2, 5], 5, 1),                      # find target in length 2 array
]    

@pytest.mark.parametrize('nums, target, output', products)
def test_search(nums, target, output):
    assert binary_search.search(nums, target) == output
