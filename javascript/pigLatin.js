function pigLatin(str) {
    const vowels = { 'a':true, 'e':true, 'i':true, 'o':true, 'u':true }
    let start, end

    if ( vowels[ str[0] ] ) return str + 'way'

    for (let i = 1; i < str.length; i++) {

        if ( vowels[ str[i] ] ) {
            start = str.slice(i)
            end = str.slice(0, i) + 'ay'
            return start + end
        }
    }
}

console.log(pigLatin('school'))
console.log(pigLatin('scram'))
console.log(pigLatin('eight'))
