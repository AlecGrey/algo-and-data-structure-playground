/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function(headA, headB) {
    // use double-loop strategy to find meeting point
    // edge case:
    if (headA === null || headB === null) return null
    let A = headA
    let B = headB
    while (A !== B) {
        A = A === null ? headB : A.next
        B = B === null ? headA : B.next
    }
    return A
};
// ORIGINAL SOLUTION:
// var getIntersectionNode = function(headA, headB) {
//     let A = headA // set A to point to the head of the A-list
//     let B
//     while (A !== null) {
//         B = headB // set B to point to the head of the B-list
//         while (B !== null) {
//             if (A === B) return A // return node if nodes match
//             else B = B.next // point B to next node if nodes don't match
//         }        
//         A = A.next // point A to next node if no match was found in B
//     }
//     return null
// };
// @lc code=end

