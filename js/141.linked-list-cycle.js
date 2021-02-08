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
    if (!head) return false
    let [A, B] = [head, head]

    while (B.next !== null && B.next.next !== null) {
        [A, B] = [A.next, B.next.next]
        if (A === B) return true
    }
    return false
};
// @lc code=end

