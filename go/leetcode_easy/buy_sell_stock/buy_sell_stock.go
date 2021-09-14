package buy_sell_stock

// Best Time to Buy and Sell Stock
// https://leetcode.com/explore/featured/card/top-interview-questions-easy/97/dynamic-programming/572/

func MaxProfit(prices []int) int {
	profit := 0
	buy := prices[0]

	for i := 1; i < len(prices); i++ {
		if buy > prices[i] {
			buy = prices[i]
		} else if prices[i]-buy > profit {
			profit = prices[i] - buy
		}
	}

	return profit
}
