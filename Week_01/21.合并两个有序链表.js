/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 // 双指针
 // 时: O(min(m,n)~ m+n)
 // 空: O(1)
var mergeTwoLists = function(l1, l2) {
    const fakeHead = new ListNode(null);
    let cur = fakeHead;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            cur.next = l2;
            l2 = l2.next;
        } else {
            cur.next = l1;
            l1 = l1.next;
        }
        cur = cur.next;
    }
    cur.next = l1 || l2;
    return fakeHead.next;
};
// @lc code=end

