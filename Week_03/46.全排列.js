/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//回溯法
//完整回溯中剔除不符合规范的结果(这里是如果之前有选过这个值则不选)。
var permute = function(nums) {
    if(nums.length === 0) return nums;
    const ans = [];
    const solution = [];
    const choose = Array(nums.length).fill(false);
    const backtracking = () => {
        if(solution.length === nums.length){
            ans.push([...solution]);
            return;
        }
        for(let i = 0, len = nums.length; i < len; i++) {
            const num = nums[i];
            if(choose[i])continue;
            solution.push(num);
            choose[i] = true;
            backtracking();
            solution.pop();
            choose[i] = false;
        }
    }
    backtracking();
    return ans;
};
// @lc code=end

