// Slow as molasses, needs refactor...
const converter = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}

const romanToInt = (str) => {
    let finalCount = 0
    let queue = 0

    for (let i = 0; i < str.length; i++) {

        let curr = converter[ str[i] ]
        let next = converter[ str[i+1] ]
        queue += curr

        if ( curr === next ) continue
        if ( next > curr ) {
            finalCount -= queue
        } else {
            finalCount += queue
        }
        queue = 0
    }
    return finalCount
}

console.log(romanToInt( 'LVIII' ))