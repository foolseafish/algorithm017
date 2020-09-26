/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 // 时：O（n）
 // 空：O（1）
var reverseList = function(head) {
    let cur = null;
    let next = head;
    while (next) {
        let temp = next.next;
        next.next = cur;
        cur = next;
        next = temp;
    }
    return cur;
};
// @lc code=end

