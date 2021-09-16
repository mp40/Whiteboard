package buy_sell_stock_two

import "testing"

func TestMaxProfit(t *testing.T) {
	assertCorrectIndexValue := func(t testing.TB, got, want int) {
		t.Helper()
		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	}

	/*
	   Explanation:
	   Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
	   Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
	*/
	t.Run("should return correct result for unsorted array", func(t *testing.T) {
		array := []int{7, 1, 5, 3, 6, 4}

		got := MaxProfit(array)
		want := 7

		assertCorrectIndexValue(t, got, want)
	})

	/*
	   Explanation:
	   Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
	   Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
	   engaging multiple transactions at the same time. You must sell before buying again.
	*/
	t.Run("should return correct result for array of ascending values", func(t *testing.T) {
		array := []int{1, 2, 3, 4, 5}

		got := MaxProfit(array)
		want := 4

		assertCorrectIndexValue(t, got, want)
	})

	/*
	   Explanation:
	   In this case, no transaction is done, i.e. max profit = 0.
	*/
	t.Run("should return correct result for array of decending values", func(t *testing.T) {
		array := []int{7, 6, 4, 3, 1}

		got := MaxProfit(array)
		want := 0

		assertCorrectIndexValue(t, got, want)
	})
}
