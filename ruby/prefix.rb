require 'pry'

def longest_common_prefix(arr)

    prefix = ""
    count = 0
    str = arr.shift
    return prefix if !str
    
    until count == str.length

        arr.any? {|str2| str[count] != str2[count]} ? break : prefix += str[count]

        count += 1
    end
    prefix
end

strs = ["flower","flow","flight"]

Pry.start

# Output: "fl"