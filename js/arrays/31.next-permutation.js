// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

// The replacement must be in place and use only constant extra memory.

// Example 1:
// Input: nums = [1,2,3]
// Output: [1,3,2]

// Example 2:
// Input: nums = [3,2,1]
// Output: [1,2,3]

// Example 3:
// Input: nums = [1,1,5]
// Output: [1,5,1]

// Example 4:
// Input: nums = [1]
// Output: [1]
var nextPermutation = function(nums) {
    if (nums.length === 1) return;
    if (nums.length === 2) {
        nums.unshift(nums.pop());
        return;
    }

    const arr = [];
    let i = nums.length - 1;
    while (i >= 0) {
        if (nums[i] <= nums[i - 1] || i === 0) {
            // construct reversed array by removing from top of nums
            arr.push(nums.pop());
            i--;
        } else {
            let m = nums[--i]; // slide index and save value
            arr.push(nums.pop()) // remove end of nums and add to arr (arr should still be sorted at this point)
            let j = 0;
            while (m >= arr[j]) j++; // find index of next-highest number in arr
            nums[i] = arr[j]; // switch the nums
            arr[j] = m; // using the previously saved pointer to the value
            break;
        }
    }
    while (arr.length > 0) nums.push(arr.shift());
    return nums;
};

// const arr = [1, 1];
// nextPermutation(arr);
// console.log(arr);

console.log(nextPermutation([1, 2, 3])); // 1, 3, 2
console.log(nextPermutation([1, 3, 2])); // 2, 1, 3
console.log(nextPermutation([2, 1, 3])); // 2, 3, 1
console.log(nextPermutation([2, 3, 1])); // 3, 1, 2
console.log(nextPermutation([3, 1, 2])); // 3, 2, 1
console.log(nextPermutation([3, 2, 1])); // 1, 2, 3