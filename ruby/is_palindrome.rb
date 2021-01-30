require 'pry'

def is_palindrome(x)
    
    arr = x.to_s.split("")
    count = 0

    until count == arr.length / 2

        return false if arr[count] != arr[arr.length - count - 1]
        
    end

    true

end

Pry.start