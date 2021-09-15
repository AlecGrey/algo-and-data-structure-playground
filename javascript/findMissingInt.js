// find the missing integer in the array of numbers 1-10

function missingInt(arr) {
    return arr.reduce( (acc, i) => acc - i, 55)
}

const nums = [7, 2, 3, 6, 5, 9, 1, 4, 8]