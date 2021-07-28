// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Example 2:
// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

// Constraints:
// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const arr = [];
    const map = {};

    nums.sort((a, b) => a - b);

    let p2, p3, p4, sum, str;

    for (let p1 = 0; p1 < nums.length; p1++) {
        p4 = nums.length - 1; // initialize end pointer
        while (p4 > p1) {
            p2 = p1 + 1; p3 = p4 - 1; // initialize middle two pointers, now such that the order is p1, p2, p3, p4
            while (p3 > p2) {
                sum = nums[p1] + nums[p2] + nums[p3] + nums[p4];
                if (sum === target) {
                    str = nums[p1] + "-" + nums[p2] + "-" + nums[p3] + "-" + nums[p4];
                    if (!map[str]) {
                        arr.push([nums[p1], nums[p2], nums[p3], nums[p4]]);
                        map[str] = true;
                    } else {
                        p2++;
                    }
                } 
                else if (sum > target) p3--;
                else p2++;
            }
            p4--;
        }
    }

    return arr;
};

// console.log(fourSum([1,0,-1,0,-2,2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));