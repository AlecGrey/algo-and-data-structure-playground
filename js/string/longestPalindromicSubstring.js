// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Example 3:
// Input: s = "a"
// Output: "a"

// Example 4:
// Input: s = "ac"
// Output: "a"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case),

const longestPalindromicSubstring = str => {
    let pal = str.charAt(0);
    let test;
    for (let i = 0; i < str.length; i++) {
        if (pal.length >= str.length - i) break; // no need to continue iterating if no larger palindrome can be found
        test = str.charAt(i);
        for (let j = i + 1; j < str.length; j++) {
            test += str.charAt(j);
            if (isPalindrome(test) && test.length > pal.length) pal = test; // if test is a palindrome AND of greater length than the current largest palindrome, set it
        }
    }
    return pal;
}

const isPalindrome = str => {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (str.charAt(i) != str.charAt(j)) return false;
        i++;
        j--;
    }
    return true;
}

console.log(longestPalindromicSubstring("babad"));
console.log(longestPalindromicSubstring("cbbd"));
console.log(longestPalindromicSubstring("a"));
console.log(longestPalindromicSubstring("ac"));