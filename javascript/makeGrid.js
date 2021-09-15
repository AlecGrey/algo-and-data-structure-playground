// input parameters of an array and an integer
// constructs an array of arrays, where each value of the first-level array is 
// an array that has a number of values in it equal to the declared integer
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
depth = 3

function makeGrid(array, depth) {
    const returnArray = []
    for (let i = 0; i < array.length; i++) {

        if (i % depth === 0) { returnArray.push([]) }

        returnArray[Math.floor(i / depth)].push(arr[i])
    }
    return returnArray
}

console.log(makeGrid(arr, 3))