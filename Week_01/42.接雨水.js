/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 单调栈
// 保存左边界
// 当右边界找到时,循环弹出左边界，确定左右边界最小值即这一段可以接的雨水量
// 比如[7,2,0,3,7]这种情况，遇到3时的单调栈[7,2,0],弹出 0,确定0的左边界2，右边界3。可放 Math.min(2,3) - 0 ,宽度为3的索引-2的索引-1.即2*1 = 2。（这时可以想做 2,0,3组成封闭的矩形，[7,2,2,3,7]）,单调栈变成[7]。在同理继续对比3 和 7.
// 时：O（n）
// 空：O（n）
var trap = function(height) {
    let i = 0;
    let stack = [];
    let count = 0;
    while (i < height.length) {
        while (stack.length > 0 && height[i] >= height[getTop(stack)]) {
            const top = stack.pop();
            if(stack.length === 0) break;
            const distance = i - getTop(stack) - 1;
            const heightDelta = Math.min(height[getTop(stack)], height[i]) - height[top];
            count += heightDelta * distance;
        }
        stack.push(i++);
    }
    return count
};

var getTop = arr => arr[arr.length - 1];
// 时：O（n）
// 空：O（n）
//动态规划
// 找出每个位置的左边界和右边界。左右边界的最小值 - 当前位置的高度即为这个位置能接的雨水高度
// 例如[7,1,2,7], 1位置的雨水高度 = 左右边界最小值7 - 1 = 6。即这个容器盛水（想象成2这个位置被填充到了7），1位置对应的水的量/// 就是6。2位置对应5(想象成1位置被填充到7)。总共是11。

var trap = function(height) {
    let left = [];
    let right = [];
    let count = 0
    const length = height.length;
    left[0] = height[0];
    for (let i = 1; i < length; i++ ) {
        left[i] = Math.max(left[i - 1], height[i]);
    } 
    right[length - 1] = height[length - 1];
    for (let i = length - 2; i >= 0 ; i-- ) {
        right[i] = Math.max(right[i + 1], height[i]);
    } 

    for (let i = 0; i < length; i++ ) {
        count += Math.min(right[i],left[i]) - height[i];
    }
    return count;
}

// 双指针
// 按照上述思路只要找到当前点的左边界和右边界。而当前点所接雨水的竖直容量取决于左右边界的最小值。
// 如果左边界的值小于右边界，则移动左指针。如果其小于左边记录最大值,又因为前面的右边界值大于左边界，说明竖直容量可以确定（maxLeft-height[i]）。
// 反之右边界同理。 两边界相等任意移动都可以。
// 时：O（n）
// 空：O（1）
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max_left = 0;
    let max_right = 0;
    let count = 0;
    while (left < right) {
        if (height[left] < height[right]) { 
            max_left = Math.max(height[left],max_left);
            count += max_left - height[left++];
        } else {
            max_right = Math.max(height[right],max_right);
            count += max_right - height[right--];
        }
    }
    return count;
}
// @lc code=end

