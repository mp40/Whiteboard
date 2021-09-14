// Valid Sudoku
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/

/*
Determine if a 9x9 Sudoku board is valid.
Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain
the digits 1-9 without repetition.

The Sudoku board could be partially filled,
where empty cells are filled with the character '.'
*/

// idea for strings from here
// https://www.youtube.com/watch?v=Pl7mMcBm2b8

export const isValidSudoku = function(board) {
    // only one set needed as we will use strings to store values
    const seen = new Set();

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board.length; j++){
            const currentValue = board[i][j]
            // we don't need to worry about empty values
            if(currentValue !== '.'){
                const seenRow = `${currentValue} seen at row ${i}`
                const seenCol = `${currentValue} seen at col ${j}`
                const seenBox = `${currentValue} seen at box ${Math.floor(i/3)} - ${Math.floor(j/3)}`
                // Math.floor above is needed so that box id's are correct

                // check if string already in set
                if (seen.has(seenRow) || seen.has(seenCol) || seen.has(seenBox)) {
                        return false
                    }
                // if not in set add to set
                seen.add(seenRow)
                seen.add(seenCol)
                seen.add(seenBox)
            }
        }
    }
    // return true if finishes loop without finding error
    return true;
};