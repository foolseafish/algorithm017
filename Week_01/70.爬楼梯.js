/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 时:O(n);
// 空:O(1); 
var climbStairs = function(n) {
    if ( n < 4) return n;    
    let a = 2;
    let b = 3;
    for (let i = 4; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};
// @lc code=end

