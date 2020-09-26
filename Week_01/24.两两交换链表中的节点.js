/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
//两两交换包含两个问题：1.2个一组2.交换(即reverse)
// 时：O（n）
// 空：O（1）
var swapPairs = function(head) {
    //当链表长度小于2时直接返回该链表    
    if(!head || !head.next) return head;
    let cur = head;
    let next = head.next;
    head.next = swapPairs(next.next); // 解决问题1
    next.next = cur; // 解决问题2
    return next;
};
// @lc code=end

