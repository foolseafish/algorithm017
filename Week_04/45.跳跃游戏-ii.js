/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let end = 0;
    let step = 0;
    let maxDistance = 0;
    for(let i = 0; i < nums.length - 1; i++) {
        maxDistance = Math.max(maxDistance, i + nums[i]);
        if(i === end) {
            end = maxDistance;
            step++;
        }
        if(end >= nums.length - 1) return step;
    }
    return step;
};
// @lc code=end

