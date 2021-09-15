/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    // halfway point of the 'merged' arrays
    const total = nums1.length + nums2.length
    const half = Math.floor(total / 2)
    let A, B
    // set arrays according to array length, we want to search the smaller of the two
    if (nums1.length >= nums2.length) {
        A = nums2
        B = nums1
    } else {
        A = nums1
        B = nums2
    }

    if (A.length === 0) {
        if (total % 2 === 0) return ((B[half] + B[half-1]) / 2)
        else return B[half]
    }

    // set left and right bounds for smaller array
    let l = 0
    let r = A.length - 1
    let i, j, aLeft, aRight, bLeft, bRight
    while (true) {
        // set current pointer for A and B
        // A pointer is midpoint of left and right
        i = Math.floor((l + r) / 2)
        // B pointer is remaining # from median
        j = half - i - 2
        // if we succeed our bounds, use Infinity / -Infinity for comparisons
        aLeft = i >= 0 ? A[i] : -Infinity
        aRight = (i + 1) < A.length ? A[i+1] : Infinity
        bLeft = j >= 0 ? B[j] : -Infinity
        bRight = (j + 1) < B.length ? B[j+1] : Infinity

        if ( aLeft <= bRight && bLeft <= aRight ) {
            // We got it!
            if ( total % 2 === 0 ) {
                // if we have an even number, max of the left, min of the right / 2
                // console.log(aLeft, bLeft, aRight, bRight)
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2
            } else {
                return Math.min(aRight, bRight)
            }
        }
        else if ( aLeft > bRight ) r = i - 1
        else l = i + i
    }
};
// @lc code=end

