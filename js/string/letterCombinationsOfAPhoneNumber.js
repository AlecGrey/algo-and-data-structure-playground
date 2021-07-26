// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]


// Constraints:
// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].
var letterCombinations = function (digits) {
    const options = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }

    const addComboToResults = (currentString, i, digits, options, result) => {
        console.log(this.options);
        let nextString;
        const digit = digits[i];
        if (i !== digits.length - 1) {
            for (let char of options[digit]) {
                nextString = currentString + char;
                addComboToResults(nextString, i + 1, digits, options, result);
            }
        }
        else {
            for (let char of options[digit]) {
                nextString = currentString + char;
                result.push(nextString);
            }
        }
    }

    if (digits === "") return [];
    else if (digits.length === 1) return options[digits];

    const result = [];

    addComboToResults("", 0, digits, options, result);

    return result;
};


console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));
console.log(letterCombinations("7692"));