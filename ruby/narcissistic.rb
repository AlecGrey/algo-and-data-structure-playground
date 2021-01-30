# A Narcissistic Number is a positive number which is the sum of its own digits, 
# each raised to the power of the number of digits in a given base. In this Kata, 
# we will restrict ourselves to decimal (base 10).

# 153 => 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
require 'pry'
require_relative '../yield.rb'

def narcissistic?(value)
    # Code me to return true or false
    arr = value.to_s.split("")
    count = arr.count  
    arr.map {|num| num.to_i ** count}.sum == value
end

def narc?(value)
    arr = value.to_s.split("")
    count = arr.count  
    value -= arr.sum {|num| num.to_i ** count}
    value == 0    
end

Pry.start