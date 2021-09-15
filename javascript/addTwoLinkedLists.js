// add two linked lists that represent a reversed integer. [1,2,3] represents 321.
// return as a reversed linked list. [1, 0, 2] + [3, 0, 4] = [4, 0, 6]

const addTwoNumbers = function(l1, l2) {
    let i = 0
    const result = []
    let sum, num1, num2
    let remainder = 0
    while (true) {
        if (!l1[i] && !l2[i]) return result

        num1 = !!l1[i] ? l1[i] : 0
        num2 = !!l2[i] ? l2[i] : 0

        sum = num1 + num2 + remainder

        if (sum >= 10) {
            sum = sum - 10
            remainder = 1
        } else { remainder = 0 }

        result.push( sum )
        i++
    }
}

const l1 = [2,4,3]
const l2 = [5,6,4]

console.log(addTwoNumbers( l1, l2 )) // [ 7, 0, 8 ]