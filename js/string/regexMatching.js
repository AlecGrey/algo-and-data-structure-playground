// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
var isMatch = function(s, p) {
    if (p[0] == "*") return false; // invalid pattern check
    // 0. initialize variables
    let si = 0; // string index
    let pi = 0; // pattern index
    let matchingPrevious = false; // pattern rule
    let stringChar, patternChar;
    let valid = true;
    // 1. begin WHILE loop over all string characters
    while (si < s.length) {
        if (pi >= p.length) return false; // WE STILL HAVE REMAINING STRINGS BUT NO RULES LEFT!
        // 2. check current rule against the string & pattern character
        matchingPrevious = p[pi] == "*"; // check whether we are matching the CURRENT or PREVIOUS pattern index
        if (matchingPrevious) {
            // IF THE CHARACTERS ON BOTH SIDES OF THE * ARE THE SAME, THE 2ND CHARACTER IS REDUNDANT
            if (p[pi - 1] === p[pi + 1]) {
                // IF A * FOLLOWS THE DESIRED DELETION CHARACTER, WE NEED TO REMOVE IT AS WELL
                if (p[pi+2] === "*") p = p.slice(0, pi+1) + p.slice(pi+3);
                else p = p.slice(0, pi+1) + p.slice(pi+2);
            }
        }
        stringChar = s[si];
        patternChar = matchingPrevious ? p[pi - 1] : p[pi]; // if current rule is *, chech stringChar against previous character
        valid = checkCharacterAgainstRule(stringChar, patternChar); // check character against rule
        if (!valid) {
            // matching failed.  If we were matching a *, we can skip it and move to the next rule at the same string index
            if (p[pi] == "*") {
                pi++;
                continue;
            } else if (p[pi + 1] == "*") {
                pi += 2;
                continue;
            } else {
                console.log("failpoint1");
                return false; // otherwise, matching has failed
            }
        }
        // 3. increment the string, pattern indexes
        si++; // next char
        if (!matchingPrevious) pi++; // increment pattern index UNLESS we have a * character
    }
    // we completed the string and found no matching errors.
    // 4. check if any remaining rules
    console.log(si);
    console.log(pi);
    if (pi == p.length - 1 && p[pi] == "*") return true; // remaining pattern character is LAST, AND is a *
    else if (pi == p.length - 2 && p[pi + 1] == "*") return true; // next pattern ahead is LAST, AND is a *, meaning current pattern can be anything and still pass.
    else if (pi <= p.length - 1) return false; // if the previous two instances fail, AND we have remaining patterns to match, we FAIL
    else return true; // we succeed!
};

var checkCharacterAgainstRule = function(char, patternChar) {
    if (patternChar == ".") return true;
    else return char == patternChar;
}

// console.log(isMatch("aa", "a")); // false
// console.log(isMatch("aa", "aa")); // true
// console.log(isMatch("aa", ".*")); // true
// console.log(isMatch("aab", "c*a*b")); // true
// console.log(isMatch("mississippi", "mis*is*p*.")); // false
// console.log(isMatch("mississippi", "mis*is*.p*.")); // true
// console.log(isMatch("aaa", "aaaa")); // false
// console.log(isMatch("aa", "a*")); // true
// console.log(isMatch("aaa", "a*a")); // true
console.log(isMatch("aaa", "ab*a*c*a")); // true

