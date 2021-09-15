// Implement a method to perform basic string compression 
// using the counts of repeated characters. For example, the 
// string aabcccccaaa would become a2b1c5a3. You can assume the 
// string has only uppercase and lowercase letters (a-z).
const chars = ["a","a","b","b","c","c","c"]

function str_compress(string) {
    let output = []
    let count = 1
    for (let i=0; i < string.length; i++) {
        if (string[i] === string[i+1]) {
            count++
        } else if (string[i] !== string[i+1]) {
            output.push(string[i], count)
            count = 1
        }
    }
    return output
}

function char_compress_in_place(chars) {
    let count = 1
    let i = 0
    let j = 0

    while (!!chars[j]) {
        while (chars[i] === chars[i+1]) {
            count++
            i++
        }

        chars.splice(j, count, chars[i], count)
        count = 1
        j += 2
        i = j
    }
}


char_compress_in_place(chars)
console.log(chars)