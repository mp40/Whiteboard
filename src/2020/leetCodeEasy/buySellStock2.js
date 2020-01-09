// Best Time to Buy and Sell Stock II
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

/*
Say you have an array for which the ith element
is the price of a given stock on day i.

Design an algorithm to find the maximum profit.
You may complete as many transactions as you like
(i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time
(i.e., you must sell the stock before you buy again).
*/

export const maxProfit = (prices) => {
    let result = 0;

    for(let i = 1; i < prices.length; i++){
        if(prices[i] > prices[i-1]){
            result += prices[i] - prices[i-1];
        }
    }

    return result;
}

/*
Approach 3: Simple One Pass
Algorithm
This solution follows the logic used in Approach 2 itself,
but with only a slight variation. In this case,
instead of looking for every peak following a valley,
we can simply go on crawling over the slope and keep on adding the profit
obtained from every consecutive transaction.
In the end,we will be using the peaks and valleys effectively,
but we need not track the costs corresponding to the
peaks and valleys along with the maximum profit,
but we can directly keep on adding the difference between the
consecutive numbers of the array if the second number
is larger than the first one, and at the total sum we obtain
will be the maximum profit. This approach will simplify the solution.
*/
