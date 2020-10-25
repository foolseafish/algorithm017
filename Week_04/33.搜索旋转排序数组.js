/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let mid = left + (right - left >> 1);
        if(nums[mid] === target) return mid;
        if(nums[left] <= nums[mid]) {
            //左边有序
             if(nums[mid] > target && nums[left] <= target) {
                 // 在左边，那就是正常二分就好了
                right = mid - 1;
             } else {
                 //在右边，
                left = mid + 1;
             }
        } else {
            //右边有序
            if(nums[mid] < target && target <= nums[right]) {
                //在右边，
                left = mid + 1;
                 
             } else {
                 // 在右边
                right = mid - 1;
             }
        }
    }
    return -1;
};
// @lc code=end

