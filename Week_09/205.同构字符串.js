/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const dicS = {};    
    const dicT = {};    
    for(let i = 0, len =s.length; i < len; i++) {
        if(dicS[s[i]] === t[i])continue;
        if(dicS[s[i]] || dicT[t[i]]) return false;
        dicS[s[i]] = t[i];
        dicT[t[i]] = s[i];
    }
    return true;
};
// @lc code=end

