# Complete the method/function so that it converts dash/underscore delimited 
# words into camel casing. The first word within the output should be 
# capitalized only if the original word was capitalized (known as Upper Camel Case, 
# also often referred to as Pascal case).

require 'pry'

def to_camel_case(str)
    arr = str.split(/[-,_]/)
    first = arr.shift
    arr.map {|word| word.capitalize}.unshift(first).join
end

Pry.start