/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 双指针
// 时：O(n)
// 空：O(1)
var moveZeroes = function(nums) {
    let p = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        const num = nums[i];
        if (num !== 0) {
            nums[i] = nums[p];
            nums[p++] = num;
        }
    }     
};
// @lc code=end

