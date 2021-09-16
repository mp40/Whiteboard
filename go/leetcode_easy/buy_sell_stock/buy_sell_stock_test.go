package buy_sell_stock

import "testing"

func TestMaxProfit(t *testing.T) {
	assertCorrectProfitValue := func(t testing.TB, got, want int) {
		t.Helper()
		if got != want {
			t.Errorf("got %v want %v", got, want)
		}
	}

	/*
	   Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
	   Not 7-1 = 6, as selling price needs to be larger than buying price.
	*/
	t.Run("should return correct result for unsorted array", func(t *testing.T) {
		array := []int{7, 1, 5, 3, 6, 4}

		got := MaxProfit(array)
		want := 5

		assertCorrectProfitValue(t, got, want)
	})

	/*
	   Explanation: In this case, no transaction is done, i.e. max profit = 0.
	*/
	t.Run("should return correct result for array of decending values", func(t *testing.T) {
		array := []int{7, 6, 4, 3, 1}

		got := MaxProfit(array)
		want := 0

		assertCorrectProfitValue(t, got, want)
	})
}
