require 'pry'

def two_sum(nums, target)
    
    num_hash = {}
    
    nums.each_with_index do |num, i|
        
        return {index_1: num_hash[num], index_2: i} if num_hash[num]

        reciprocal = target - num
        num_hash[reciprocal] = i
        
    end
end



Pry.start