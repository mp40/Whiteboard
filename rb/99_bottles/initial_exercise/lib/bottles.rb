class Bottles
    def verse(count)
        if count == 0
            return "No more bottles of beer on the wall, " +
            "no more bottles of beer.\n" +
            "Go to the store and buy some more, " +
            "99 bottles of beer on the wall.\n"
        end
    
        if count == 1
            return "1 bottle of beer on the wall, " +
            "1 bottle of beer.\n" +
            "Take it down and pass it around, " +
            "no more bottles of beer on the wall.\n"
        end

        if count == 2
            return "2 bottles of beer on the wall, " +
            "2 bottles of beer.\n" +
            "Take one down and pass it around, " +
            "1 bottle of beer on the wall.\n"
        end
  
        if count == 3
            return "3 bottles of beer on the wall, " +
            "3 bottles of beer.\n" +
            "Take one down and pass it around, " +
            "2 bottles of beer on the wall.\n"
        end

        return "#{count} bottles of beer on the wall, " +
        "#{count} bottles of beer.\n" +
        "Take one down and pass it around, " +
        "#{count - 1} bottles of beer on the wall.\n"
    end
    
    def verses(first, last)
        return verse(first) + "\n" + verse(last)
    end    
end