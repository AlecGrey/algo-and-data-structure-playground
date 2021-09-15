const parens = "([)]"

var isValid = function(string) {
    const ref = { ')': '(', ']': '[', '}': '{' }

    const stack = []

    for (let i = 0; i < string.length; i++) {
        if ( ref[string[i]] ) {
            
            if ( ref[string[i]] === stack[stack.length - 1] ) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push( string[i] )
        }
        console.log(stack)
    }

    return stack.length === 0

}

console.log( isValid(parens) )