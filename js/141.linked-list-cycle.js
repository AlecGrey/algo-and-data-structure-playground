/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
var hasCycle = function(head) {
    try {
        let A = head
        let B = head.next
        while (A !== B) {
            A = A.next
            B = B.next.next
        }
        return true
    } 
    catch {
        return false
    }
};
// @lc code=end

