/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let start = 0;
    let end = s.length -1;
    while(start < end) {
        if(s[start] !== s[end]) return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1);
        start++;
        end--;
    }
    return true;
};

var isPalindrome = (s, start, end) => {
    while(start < end) {
        if(s[start] !== s[end]) return false;
        start++; end--;        
    }
    return true;
}
// @lc code=end

