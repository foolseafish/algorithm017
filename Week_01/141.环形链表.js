/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */

// 弗洛伊德乌龟和兔子
var hasCycle = function(head) {
    let r = head;
    let t = r;
    while (r && r.next && r.next.next) {
        r = r.next.next;
        t = t.next;
        if (r === t) { // 乌龟与兔子相遇
            return true;
        }        
    }
    return false;
};

// 长起点优化：传送的乌龟
var hasCycle = function(head) {
    let r = head;
    let t = r;
    let countLimt = 2;
    let step = 0;
    while (r) {
        r = r.next;
        if (r === t) { // 乌龟与兔子相遇
            return true;
        }
        if (++step === countLimt) {
            countLimt *= 2; //减少指针乌龟指针的赋值
            step = 0;
            t = r;
        }
    }
    return false;
};
// @lc code=end

