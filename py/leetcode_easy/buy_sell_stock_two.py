def maxProfit(prices):
    profit = 0

    i = 1
    while i < len(prices):
        if prices[i - 1] < prices[i]:
            profit += prices[i] - prices[i - 1]
        i += 1 

    return profit