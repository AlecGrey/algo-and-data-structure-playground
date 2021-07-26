// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

// Constraints:

// 1 <= n <= 8
var generateParenthesis = function (n) {
    const results = [];

    addToResults(results, "", 0, n * 2);

    return results;
};

const addToResults = (results, currentString, balance, finalLength) => {
    if (balance === -1) return;
    if (currentString.length < finalLength) { // WE NEED TO ADD TO THE STRING
        for (let paren of ["(", ")"]) {
            if (paren === "(") addToResults(results, currentString + paren, balance + 1, finalLength);
            else addToResults(results, currentString + paren, balance - 1, finalLength);
        }
    } else {
        if (balance === 0) results.push(currentString);
    }
}

console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));