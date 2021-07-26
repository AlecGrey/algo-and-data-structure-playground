// Given two strings of characters and/or numbers separated by a single space return a string
// of each num or character that is both input strings with the numbers first listed in increasing order 
// order followed by the characters in alphabetic order. 

// For example:
// s1 = "6 0 2 4 7 1 8 3 9 5 DOG A1"
// s2 = "A1 3 G DOG 18 3 9 BIRD ONE 5 U J X2 A" 
// return: "3 5 9 A1 DOG

const orderedRepeatingCharacters = (str1, str2) => {
    const arr1 = str1.split(" ");
    const arr2 = str2.split(" ");

    const dict = {};
    const dict2 = {};

    for (const str of arr1) dict[str] = true; // O(n)
    
    for (const str of arr2) {
        if (dict[str]) dict2[str] = true;
    } // O(n)

    return Object.keys(dict2).join(" ");
}

const string1 = "6 0 2 4 7 1 8 3 9 5 DOG A1";
const string2 = "A1 3 G DOG 18 3 9 BIRD ONE 5 U J X2 A";

const result = orderedRepeatingCharacters(string1, string2);
console.log(result);