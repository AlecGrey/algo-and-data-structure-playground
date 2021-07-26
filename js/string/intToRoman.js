// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.
var intToRoman = function(num) {
    numeral = "";
    let i;
    while (num > 0) {
        if (num >= 1000) {

            i = (num - num % 1000) / 1000; // number of 1000s
            numeral += "M".repeat(i);
            num -= i * 1000;

        } else if (num >= 100) {

            i = (num - num % 100) / 100; // number of 100s

            if (i === 9) numeral += "CM";
            else if (i > 4) numeral += "D" + "C".repeat(i - 5);
            else if (i === 4) numeral += "CD";
            else numeral += "C".repeat(i);

            num -= i * 100;

        } else if (num >= 10) {

            i = (num - num % 10) / 10; // number of 10s

            if (i === 9) numeral += "XC";
            else if (i > 4) numeral += "L" + "X".repeat(i - 5);
            else if (i === 4) numeral += "XL";
            else numeral += "X".repeat(i);

            num -= i * 10;

        } else {

            if (num === 9) numeral += "IX";
            else if (num > 4) numeral += "V" + "I".repeat(num - 5);
            else if (num === 4) numeral += "IV";
            else numeral += "I".repeat(num);

            num = 0;

        }
    }
    return numeral;
};

console.log(intToRoman(3)); // III
console.log(intToRoman(7)); // VII
console.log(intToRoman(10)); // CDXL
console.log(intToRoman(49)); // XLIX
console.log(intToRoman(440)); // CDXL