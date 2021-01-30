require 'pry'

def roman_to_int(s)
    arr = s.split("")
    i = 0
    
    until arr.length == 0 do
        case
        when arr[0] == "I"
            ["X", "V"].any? {|num| arr.include?(num)} ? i -= 1 : i += 1
        when arr[0] == "V"
            i += 5
        when arr[0] == "X"
            ["L", "C"].any? {|num| arr.include?(num)} ? i -= 10 : i += 10
        when arr[0] == "L"
            i += 50
        when arr[0] == "C"
            ["D", "M"].any? {|num| arr.include?(num)} ? i -= 100 : i += 100
        when arr[0] == "D"
            i += 500
        when arr[0] == "M"
            i += 1000
        end
       arr.shift 
    end
    i
end


puts roman_to_int("IV") #=> 4

puts roman_to_int("XLIX") #=> 49

