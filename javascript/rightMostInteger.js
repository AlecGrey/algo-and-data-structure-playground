// searches a string for the right-most integer

str = 'aks3dhfiufjkas;'

function rightMostInteger(string) {
    const hash = {'0': true, '1': true, '2': true, '3': true, '4': true, '5': true, '6': true, '7': true, '8': true, '9': true}
    for (let i = string.length - 1; i > -1; i--) {
        if ( hash[ string[i] ] ) return string[i]
    }
    return 'there is no integer! :(('
}

console.log(rightMostInteger(str))