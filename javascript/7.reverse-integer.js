/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNeg = x < 0
    let y = 0
    x = isNeg ? x * -1 : x
    
    while ( x !== 0 ) {
        y = y * 10
        y += x % 10
        x -= x % 10
        x = x / 10
    }

    if ( y > 2147483648 || y < -2147483648 ) return 0
    else return isNeg ? y * -1 : y

};

let i = -123

console.log(reverse(i)) // => 321


// @lc code=end

