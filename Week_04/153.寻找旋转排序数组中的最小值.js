/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let min = Infinity;
    while (left <= right ) {
        let mid = left + (right - left >> 1);
        if(nums[left] <= nums[mid]) {
            //左边有序看右边
            min = Math.min(min,nums[left]);
            left = mid + 1;
        } else {
            //右边有序看左边
            min = Math.min(min,nums[mid]);
            right = mid - 1;
        }
    }
    return min;
};
// @lc code=end

