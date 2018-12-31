/*
First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.
So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:
•	The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
•	The values are the price (in US dollars) of one share of Apple stock at that time.
So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.
Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.
For example:
  const stockPrices = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)
No "shorting"—you need to buy before you can sell. 
Also, you can't buy and sell in the same time step—at least 1 minute has to pass.
*/

const getMaxProfit = function (stockPrices) {
    if (stockPrices.length < 2) {
        return "error, parameter too short"
    }
    let buyLow = stockPrices[0];
    let buyIndex = 0;
    let sellHigh = stockPrices[1];

    stockPrices.forEach((val, dex) => {
        if (val < buyLow) {
            buyLow = val;
            buyIndex = dex;
        }
        if (val > sellHigh && dex > buyIndex) {
            sellHigh = val
        }
    })
    return sellHigh - buyLow;
}

module.exports = {
    getMaxProfit
};