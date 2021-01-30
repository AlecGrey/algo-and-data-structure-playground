require 'pry'

def speedtest
    t1 = Time.now
    result = yield
    t2 = Time.now
    puts t2 - t1
    result
end

def is_palindrome?(string)
    return "Input must be a string!" if string.class != String
    string = string.tr(" ", "").downcase
    count = 0

    until count >= (string.length / 2)

       return false if string[count] != string[string.length - 1 - count]

        count += 1
    end

    return true

end

Pry.start