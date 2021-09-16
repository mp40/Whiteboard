# Binary Search
# https://leetcode.com/problems/binary-search/

import pytest

from leetcode_easy import binary_search, buy_sell_stock

# ----------------------------------------------
# parametrized test function for binary_search
# ----------------------------------------------

search_products = [
    ([-1, 0, 3, 5, 9, 12], 0, 1),        # return index of low value target
    ([-1, 0, 3, 5, 9, 12], 9, 4),        # return index of high value target
    ([-1, 0, 3, 5, 9, 12], 2, -1),       # return -1 if target not in array
    ([5], 5, 0),                         # find target in length 1 array
    ([2, 5], 5, 1),                      # find target in length 2 array
]    

@pytest.mark.parametrize('nums, target, output', search_products)
def test_search(nums, target, output):
    assert binary_search.search(nums, target) == output

# Best Time to Buy and Sell Stock
# https://leetcode.com/explore/featured/card/top-interview-questions-easy/97/dynamic-programming/572/

# ----------------------------------------------
# parametrized test function for buy_sell_stock
# ----------------------------------------------

buy_sell_stock_products = [
    ([7, 1, 5, 3, 6, 4], 5), # return correct result for unsorted array
    ([7, 6, 4, 3, 1], 0)     # return correct result for array of decending values
]

@pytest.mark.parametrize('prices, output', buy_sell_stock_products)
def test_buy_sell_stock(prices, output):
    assert buy_sell_stock.maxProfit(prices) == output