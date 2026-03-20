//Problem 4 — Best Time to Buy and Sell Stock

function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    // Update minimum price
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    // Calculate profit
    let profit = prices[i] - minPrice;

    // Update max profit
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); //0
