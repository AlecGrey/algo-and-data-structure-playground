require 'pry'

# An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
# Implement a function that determines whether a string that contains 
# only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

def is_isogram(string)
    return false if string.class != String
    string = string.downcase
    used_letters = []
    string.split("").each do |e|
        if used_letters.include?(e)
            return false
        else
            used_letters << e
        end
    end
    return true
end

def runtime(method)
    t1 = Time.now

    method

    t2 = Time.now

    puts (t2 - t1)

    method

end

def also_isogram(string)
    string.downcase.chars.uniq == string.downcase.chars
  end

Pry.start