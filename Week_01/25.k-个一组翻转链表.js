/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */

var isListHasEnoughLength = function (head, k) {
    if (!head) return false;
    let cur = head;
    while (--k) {
        cur = cur.next;
        if(!cur) return false;
    }    
    return true;
}
// 时：O（n）
// 空：O（1）
var reverseKGroup = function(head, k) {
    // judge if list length < k
    if (!isListHasEnoughLength(head, k)) return head;
    // reverse k list
    let cur = head;
    let next = head.next;
    let copyK = k;
    while (--copyK) {
        let temp = next.next;
        next.next = cur;
        cur = next;
        next = temp;        
    }
    head.next = reverseKGroup(next, k);
    return cur;
};
// @lc code=end

