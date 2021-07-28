// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
var maxArea = function(height) {
    let t = 0, h = height.length - 1;
    // max is the lesser of the two heights multiplied by the distance between pointers
    let max = (height[t] > height[h] ? height[h] : height[t]) * (h - t);
    let current, vt, vh;
    while (t < h) {
        // get values at tail and head pointer
        vt = height[t]; vh = height[h];
        // calculate area with current values
        current = (vt > vh ? vh : vt) * (h - t); // lesser value multiplied by distance between pointers
        // if current is greater than max, it is the new max
        if (current > max) max = current;
        // choose which pointer to move:
        if (vt > vh) h--; // if tail pointer value is greater, decrement head pointer 
        else t++; // else increment tail pointer
        
    }
    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([2,3,4,5,18,17,6])); // 17