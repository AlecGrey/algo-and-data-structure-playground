function speedtest( callback, params ) {
    const d1 = performance.now()
    const result = callback(params)
    const d2 = performance.now()
    return `an answer of ${ result } in ${d2 - d1} milliseconds`
}

// Insert test code below //


const romanToInt = (str) => {
    const converter = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
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

// LOGS //

// format as: 
// console.log(speedtest( callback, parameters ))

console.log(speedtest(romanToInt, 'LVIII'))