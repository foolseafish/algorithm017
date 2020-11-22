/*
 * @lc app=leetcode.cn id=493 lang=javascript
 *
 * [493] 翻转对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    if(nums.length === 0) return 0;
    const ans = mergeSort(nums, 0, nums.length - 1)
    return ans;
};

var mergeSort = (nums, left, right) => {
    if(left >= right) return 0;
    const mid = left + right >> 1;
    let ans = mergeSort(nums, left, mid) + mergeSort(nums, mid + 1, right);
    return ans + merge(nums, left, mid, right);
}

var merge = (nums, left, mid, right) => {
    const arr = [];
    let index = 0, t = mid + 1; // for sort;
    let countIndex = mid + 1;// count for ans;
    let ans = 0;
    for(let s = left; s <= mid; s++) {
       while(countIndex <= right &&  nums[s] > 2 * nums[countIndex]) countIndex++; // count;
       while(t <= right && nums[s] > nums[t]) arr[index++] = nums[t++]; // sort;
       arr[index++] = nums[s];
       ans += countIndex - mid - 1;
    }
    for(let i = 0; i < arr.length; i++) {
        nums[left++] = arr[i];
    }
    return ans;
}
// @lc code=end

