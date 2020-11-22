/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let ans = 0;
    let size = (1 << n) - 1;// 创建二进制计数
    var dfs = (row, col, xy_sum, xy_diff) => {
        if(row === n) return ans++;
        let bits = ~(col | xy_sum | xy_diff) & size; // 获取所有能选的位置
        while(bits) {
            let put = bits & -bits; // 选最小位
            bits = bits - 1 & bits; // 清空最小位
            dfs(row + 1, col | put, (put | xy_sum) >> 1, (put | xy_diff) << 1);
        }
    }
    dfs(0, 0, 0, 0);
    return ans;
};
// @lc code=end

