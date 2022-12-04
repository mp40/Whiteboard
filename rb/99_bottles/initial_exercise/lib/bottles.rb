class Bottles
    def verse(count)
        case count
        when 0
            return "No more bottles of beer on the wall, " +
            "no more bottles of beer.\n" +
            "Go to the store and buy some more, " +
            "99 bottles of beer on the wall.\n"
    
        when 1
            return "1 bottle of beer on the wall, " +
            "1 bottle of beer.\n" +
            "Take it down and pass it around, " +
            "no more bottles of beer on the wall.\n"

        when 2
            return "2 bottles of beer on the wall, " +
            "2 bottles of beer.\n" +
            "Take one down and pass it around, " +
            "1 bottle of beer on the wall.\n"

        else
            return "#{count} bottles of beer on the wall, " +
            "#{count} bottles of beer.\n" +
            "Take one down and pass it around, " +
            "#{count - 1} bottles of beer on the wall.\n"
        end    
    end
    
    def verses(first, last)
        count = first
        song = ""
        while count >= last
            song = song + verse(count) + "\n"
            count = count - 1
        end

        return song.chomp
    end    

    def song()
        return verses(99, 0)
    end    
end