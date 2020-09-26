/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
// 先执行判圈逻辑找到相遇点。将乌龟放到起点，兔子放到相遇点，每次各自移动最后会在环起点相遇
// 逻辑验证：设链表头结点到环起点为X，顺时针环起点到相遇点为Y，顺时针相遇点到环起点为Z。那么就有
// 2 * 乌龟的路程（头结点走到环起点X + 环起点到相遇点Y） = 兔子的路程（头结点走到环起点X + 环起点走了一圈（Y + Z） + 环起点到相遇点Y）。
// 2 * （X + Y） = X + Y + Z + X;
// 证得Y = Z 即 顺时针相遇点到环起点距离 = 链表头结点到环起点的距离

var detectCycle = function(head) {
    let r = head;
    let t = r;
    let midPoint = null;
    while(r && r.next && r.next.next) {
        r = r.next.next;
        t = t.next;
        if (t === r) {
            midPoint = t;
            break;            
        }
    }
    if (!midPoint) return null;
    r = midPoint;
    t = head;

    while(r !== t) {
        r = r.next;
        t = t.next;
    }
    return r;
};
// @lc code=end

