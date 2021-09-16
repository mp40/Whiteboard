def maxProfit(prices):
    profit = 0
    buy = prices[0]

    i = 1
    while i < len(prices):
        if prices[i] < buy:
            buy = prices[i]
        elif profit < prices[i] - buy:
            profit = prices[i] - buy

        i += 1 

    return profit

        