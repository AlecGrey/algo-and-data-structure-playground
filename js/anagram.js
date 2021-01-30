// input of a string, return an anagram of the string

function anagram(string) {
    let arr = string.split('')
    let newString = ''
    for (let i = string.length - 1; i >= 0; i--) {
        newString += arr.splice( Math.floor( Math.random() * arr.length ), 1 )
    }
    return newString
}

console.log(anagram( 'algorithm' ))