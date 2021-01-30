function highestProduct(array) {
    return array.reduce((acc, curr,  i) => (array[i] * array[i+1]) > acc ? (array[i] * array[i+1]) : acc, -Infinity)
}

console.log(highestProduct([-3, 12, -2, -5, 7, 3]))