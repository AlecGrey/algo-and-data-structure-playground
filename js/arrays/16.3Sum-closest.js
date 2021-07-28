// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1

// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Constraints:
// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b) // sort low to high

    let closest = Infinity;
    let curr; // temp value for current sum
    let r, l; // right/left pointers

    for (let i = 0; i < nums.length; i++) {
        r = i + 1; // r pointer is next value
        l = nums.length - 1; // l pointer is end of array

        while (r < l) {
            curr = nums[i] + nums[r] + nums[l]; // get sum of values of the 3 pointers
            if (curr === target) return curr; // return the current value if it matches the target
            if (Math.abs(target - curr) < Math.abs(target - closest)) closest = curr; // if the current is closer to the target than the closest, closest is current
            if (curr > target) l--;
            else r++;
        }
    }

    return closest;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));