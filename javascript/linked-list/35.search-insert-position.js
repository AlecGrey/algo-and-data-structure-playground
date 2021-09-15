/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // left/right pointers
    let [l, r] = [0, nums.length - 1]
    // edge cases!
    if (nums[0] > target) return 0
    else if (nums[r] < target) return r + 1
    

    let i
    while (true) {
        // Binary search!
        i = Math.floor((l + r) / 2)
        if (nums[i] === target) return i
        else if (nums[i] < target && nums[i+1] > target) return i+1
        else if (nums[i] < target) l = i + 1
        else r = i - 1
    }
};
// @lc code=end

