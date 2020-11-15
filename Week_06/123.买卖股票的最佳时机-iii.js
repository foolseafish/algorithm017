/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //dp[i, j] = Math.max(dp[i, j - 1],dp[i - 1, k - 1] + Math.max(price[j] - price[k]));
    if(prices.length === 0) return 0;
    let firstBuy = prices[0];
    let firstProfit = 0;
    let secondBuy = firstBuy;
    let secondProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        let price = prices[i];
        firstBuy = Math.min(firstBuy, price);
        firstProfit = Math.max(price - firstBuy, firstProfit);
        secondBuy = Math.min(secondBuy, price - firstProfit);
        secondProfit = Math.max(secondProfit, price - secondBuy);
    }
    return secondProfit;
};
// @lc code=end

