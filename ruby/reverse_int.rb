# @param {Integer} x
# @return {Integer}
require 'pry'

def reverse(x)
    
    arr = x.to_s.split("")
    pos_neg = arr[0] == "-" ? "-" : ""
    count = 0

    until count == (arr.length / 2)
        
        i = arr[count]
        arr[count] = arr[arr.length - 1 - count]
        arr[arr.length - 1 - count] = i
        
        count += 1
    end
    arr.unshift(pos_neg).join.to_i
end

Pry.start