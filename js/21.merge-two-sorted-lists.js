/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
var mergeTwoLists = function(l1, l2) {
    // fast return if empty list
    if (!l1) return l2
    if (!l2) return l1

    // assign pointers to two lists, assure A has lowest value to start
    // 'list' is the reference to the original linked-list that we will be returning
    let A, B, list
    if (l1.val <= l2.val) [list, A, B] = [l1, l1, l2]
    else [list, A, B] = [l2, l2, l1]

    // placeholder to assist with pointer movement
    let C
    // loop until B points to null
    while (B !== null) {
        // push A pointer forward until A.next is either null or greater than B.val
        while (!!A.next && A.next.val <= B.val) A = A.next
        // save C as placeholder for the remaining B nodes
        C = B.next
        // point B to the remaining A nodes to 'insert it'
        B.next = A.next
        // point A to B to precede it
        A.next = B
        // set B to the remaining B nodes
        B = C
    }
    return list
};
// @lc code=end

