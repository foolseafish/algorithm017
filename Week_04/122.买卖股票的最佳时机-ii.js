/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    prices.reduce((prev,next) => {
        profit += Math.max(next-prev , 0);
        return next;   
    })
    return profit;
};
// @lc code=end

