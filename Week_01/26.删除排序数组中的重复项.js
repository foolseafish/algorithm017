/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

 // 双指针法
 // 时：O(n)
 // 空：O(1)
var removeDuplicates = function(nums) {
    let p = 0; // 指向需要最大的非重复下标
    let i = 0; // 移动指针
    while (++i < nums.length) { // 默认从1开始
        if (nums[i] !== nums[p]) { //出现了非重复的值
            nums[++p] = nums[i]; // 非重复的下一个位置即位该值，并且p下标往后一位
        }
    }    
    return p + 1; 
};
// @lc code=end

