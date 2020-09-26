/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 时：O（n）
// 空：O（1）
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    let maxLeft = 0;
    let maxRight = 0;
    while (left < right) {
        // 高度只与左右最小的高度有关
        if(countArea(height, left, right) > max) {
            maxLeft = left;
            maxRight = right;
        }
        max = Math.max(countArea(height, left, right), max);
        height[left]<height[right]?left++:right--;        
    }
    console.log(maxLeft, maxRight); // 打印左右边界
    return max;
};

const countArea = (height,left,right)=>Math.min(height[left],height[right]) * (right-left);
// @lc code=end

