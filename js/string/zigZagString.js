// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000
var convert = function(s, numRows) {
    if (numRows == 1) return s;
    const matrix = [];
    for (let i = 0; i < numRows; i++) matrix.push([]); // construct matrix
    let y = 0;
    let dir = 0; // 0 is DOWN, 1 is UP
    for (let i = 0; i < s.length; i++) {
        matrix[y].push(s[i]);
        if (y == 0) {
            dir = 0;
            y++;
        } else if (y == numRows - 1) {
            dir = 1;
            y--;
        } else {
            dir == 0 ? y++ : y--;
        }
    }
    let resultString = "";
    for (let i = 0; i < numRows; i++) resultString += matrix[i].join("");
    return resultString;
};

console.log(convert("AB", 1)); // PAHNAPLSIIGYIR
