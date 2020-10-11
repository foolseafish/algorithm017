/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 时：O(n)
// 空：O(n)
var isValid = function(s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        switch (char) {
            case '(' :
                stack.push(')');
                break;
            case '[' :
                stack.push(']');
                break;
            case '{' :
                stack.push('}');
                break;
            default :
                if(stack[stack.length -1] !== char) return false;
                stack.pop();
        }        
    }
    return stack.length === 0;
};
// @lc code=end

