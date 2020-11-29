/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(word => reverseWord(word)).join(' ');
};

var reverseWord = (word) => {
    let res = '';
    for(let char of word){
        res = char + res;
    }
    return res;

    // return word.split('').reverse().join('');
}
// @lc code=end

