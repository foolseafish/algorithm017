/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 改变原数组容量
// 时：O (n)
// 空：O（k）
var rotate = function(nums, k) {
    nums.unshift(...nums.splice(nums.length - k % nums.length));
};
// 不改变原数组容量
// 时：O (n)
// 空：O（1）
var rotate = function(nums, k) {
    k = k % nums.length;
    const reverse = (nums, start, end) => {
        if (start >= end) return;
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;        
        reverse(nums,start + 1,end - 1);
    }
    reverse(nums, 0, nums.length -1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length -1);
};
// @lc code=end

