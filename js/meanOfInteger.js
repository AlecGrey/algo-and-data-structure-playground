function mean(integer) {
    return String(integer).split('').reduce((acc, i) => (parseInt(acc) + parseInt(i)) / 2)

}

console.log(mean(123412341234))