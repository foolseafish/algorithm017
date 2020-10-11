/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let p2 = p3 = p5 = 0;
    const dp = [1];
    for(let i = 1; i < n; i++) {
        dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
        if(dp[i] === dp[p2] * 2) p2++;
        if(dp[i] === dp[p3] * 3) p3++;
        if(dp[i] === dp[p5] * 5) p5++;
    }
    return dp[n - 1];
};
// @lc code=end

