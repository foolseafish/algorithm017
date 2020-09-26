/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // 时：O(n)
 // 空：O(n)
 var twoSum = function(nums, target) {
    const dic = {};    
    for (let i = 0, len = nums.length; i < len; i++) {
        const num = nums[i];
        if (dic[target-num] !== undefined) {
            return [dic[target-num],i];
        } 
        dic[num] = i;
    }
    return [-1, -1];
};

 // 时：O(n2)
 // 空：O(1)
 var twoSum = function(nums, target) {
    for (let i = 0, len = nums.length; i < len; i++) {
        const num = nums[i];
        let index = nums.indexOf(target - num , i + 1);
        if (~index) {
            return [i , index];
        }
    }
    return [-1, -1];
};
// @lc code=end

