/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    let solution = [];
    const recursion = (start) => {
        if (solution.length === k){
            result.push([...solution]);
            return;
        }
        for(let i = start;i <= n; i++) {
            solution.push(i);
            recursion(i + 1);
            solution.pop(i);
        }
    }
    recursion(1);
    return result;
};
// @lc code=end

