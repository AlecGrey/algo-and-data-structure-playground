const arr = [1, 2, 2, 1, 3, 4, 4]
const arr2 = [3, 2, 1, 3, 1]

function findSingleInteger(arr) {
    arr.sort()
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === newArr[newArr.length - 1]) {
            newArr.splice(-1)
        }
        else { newArr.push(arr[i]) }
    }
    return newArr[0]
}

console.log(findSingleInteger(arr))
console.log(findSingleInteger(arr2))