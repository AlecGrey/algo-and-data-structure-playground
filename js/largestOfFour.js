const arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]] //=> [5, 27, 39, 1001];

// nested iteration probs slowest
function largestOfFour(arr) {
    return arr.flatMap( subArr => subArr.reduce( (a, b) => a > b ? a : b ) )
}

// 4 short iterations? hard coded
function largestOfFour2(arr) {
    return [Math.max(...arr[0]), Math.max(...arr[1]), Math.max(...arr[2]), Math.max(...arr[3]), ]
}

// 1 long iteration
function largestOfFour3(arr) {
    const flatArr = arr.flat()

    let max = flatArr[0]
    let returnArr = []

    for (let i = 1; i < flatArr.length; i++) {
        if ( i % 4 === 0 ) { 
            returnArr.push(max)
            max = flatArr[i]
        }

        if ( flatArr[i] > max ) {
            max = flatArr[i]
        }
    }
    returnArr.push(max)
    return returnArr
}

console.log(largestOfFour(arr))
console.log(largestOfFour2(arr))
console.log(largestOfFour3(arr))