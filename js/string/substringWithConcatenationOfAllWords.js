// You are given a string s and an array of strings words of the same length. Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without any intervening characters.

// You can return the answer in any order.

// Example 1:
// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
// The output order does not matter, returning [9,0] is fine too.

// Example 2:
// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// Output: []

// Example 3:
// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// Output: [6,9,12]
 
// Constraints:

// 1 <= s.length <= 104
// s consists of lower-case English letters.
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 30
// words[i] consists of lower-case English letters.
var findSubstring = function(s, words) {
    let masterDict = {};
    
    for (let i = 0; i < words.length; i++) {
        if (masterDict[words[i]] != null) masterDict[words[i]]++;
        else masterDict[words[i]] = 1;
    }

    let wordsFound;
    let str = ""
    let dict;
    let indexArray = [];

    for (let i = 0; i < s.length; i++) {
        dict = {...masterDict};
        wordsFound = 0;
        str = s.charAt(i);
        // increment the tracker if a word from the dict was found
        if (dict[str] > 0) {
            wordsFound++;
            dict[str]--;
            str = ""; // reset the string for next iteration
        }
        if (wordsFound === words.length) {
            indexArray.push(i); // if all words have been found, add index to return index array
            continue; // skip the rest of the iteration for this start index
        }

        for (let j = i + 1; j < s.length; j++) {
            str += s.charAt(j); // add character to the temporary string
            if (dict[str] > 0) { // search the dictionary for the temp string
                wordsFound++;
                dict[str]--;
                str = "";
            }
            if (wordsFound === words.length) {
                indexArray.push(i); // if all words were found, add starting index to array
                break; // no need to continue iteration at this starting index
            }
        }

    }

    return indexArray;

};

console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));
console.log(findSubstring("barfoothefoobarman", ["bar", "foo"]));
console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]));