/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 时：O (n)
// 空：O（1）
var merge = function(nums1, m, nums2, n) {
    let last = m + n - 1;
    while(n){
        // 这里使用了javascript比较的窍门：当一方undefined时 判断语句必为false。
        // 这里的while保证了n是大于0的，但m有可能为0。nums1[m - 1] 为undefined。
        // 要求m为0时取nums2中的值，就需要保证判断语句为false的时候拿到nums2的值。
        // 所以判断语句只能写成 nums1[m - 1] > nums2[n-1]。
        nums1[last--] = nums1[m - 1] > nums2[n-1]? nums1[--m]: nums2[--n];
    }
};
// @lc code=end

