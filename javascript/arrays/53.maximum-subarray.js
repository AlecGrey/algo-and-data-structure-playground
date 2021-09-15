/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let maxSum = -Infinity

    for (let i=0; i<nums.length; i++) {
        if (maxSum > 0 && nums[i] < 1) continue
        current = nums[i]
        if (current > maxSum) maxSum = current
        for (let j=i+1; j<nums.length; j++) {
            if (nums[j] + current < 1) break
            else current += nums[j]
            if (current > maxSum) maxSum = current
        }
    }
    return maxSum
};
// @lc code=end

