require 'pry'

def is_valid(str)
    
    return true if str.empty?
    # match = {")" => "(", "]"=> "[", "}" => "{" }
    stack = []

    str.each_char do |c|

        case c
        when '(', '[', '{'
            stack << c
        when ')'
            return false if stack.last != '('
            stack.pop
        when ']'
            return false if stack.last != '['
            stack.pop
        when '}'
            return false if stack.last != '{'
            stack.pop
        end

    end

    return stack.empty?

end

Pry.start