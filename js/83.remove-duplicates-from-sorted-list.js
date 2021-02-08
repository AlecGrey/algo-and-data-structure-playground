/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let A = head
    if (!head || !head.next) return head
    while (A !== null) {
        if (!!A.next && A.next.val === A.val) A.next = A.next.next
        else A = A.next
    }
    return head
};
// @lc code=end

