/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // 1.search MatrixIndex
    let start = 0;
    let end = matrix.length - 1;
    let arr;
    while(start <= end) {
        let mid = start + (end - start >> 1);
        let len = matrix[mid].length;
        if(len === 0) return false;
        if(matrix[mid][len - 1] < target) {
            start = mid + 1;
        } else if (matrix[mid][0] > target) {
            end = mid - 1;
        } else {
            arr = matrix[mid];
            break;
        }
    }
    if(!arr) return false;
    // 2.search LineIndex
    start = 0;
    end = arr.length - 1;
    while(start <= end) {
        let mid = start + (end - start >> 1);
        if(arr[mid] === target) return true;
        if(arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
};
// @lc code=end

