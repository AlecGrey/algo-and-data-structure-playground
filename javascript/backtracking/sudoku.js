// CREATE AN ALGORITHM THAT CAN SOLVE ANY VALID SUDOKU PUZZLE!

// SUDOKU RULES REQUIRE UNIQUENESS ON...
//  - Every row of 9 integers
//  - Every column of 9 integers
//  - Every 3 x 3 grid of 9 integers - there are 9 total

// FORMAT:
const easySudokuPuzzle = [
    [6, 0, 0, 0, 7, 9, 0, 3, 2],
    [0, 0, 0, 0, 6, 0, 5, 0, 0],
    [2, 0, 9, 0, 0, 8, 7, 0, 0],
    [9, 0, 6, 3, 0, 5, 0, 0, 1],
    [8, 5, 0, 0, 0, 0, 3, 0, 0],
    [4, 7, 3, 0, 0, 1, 2, 5, 0],
    [0, 4, 2, 6, 8, 0, 9, 0, 0],
    [0, 0, 0, 0, 1, 3, 4, 2, 7],
    [0, 9, 0, 2, 0, 0, 6, 0, 0]
]

const hardPuzzleBoard = [ 
    [1, 0, 5, 7, 0, 0, 0, 4, 0],
    [0, 7, 0, 5, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 6, 0],
    [0, 0, 8, 3, 0, 1, 0, 0, 0],
    [0, 5, 4, 9, 0, 8, 6, 1, 0],
    [0, 0, 0, 2, 0, 6, 8, 0, 0],
    [0, 8, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 2, 0, 9, 0],
    [0, 9, 0, 0, 0, 7, 1, 0, 4]
]

const solveSudoku = sudoku => {

    const gIndices = [ [ 0, 1, 2 ], [ 3, 4, 5 ], [6, 7, 8] ]

    const checkGrid = (board, int, row, col) => {
        // returns true if int is NOT found
        const gRow = Math.floor( row / 3 )
        const gCol = Math.floor( col / 3 )
    
        for ( const i of gIndices[gRow] ) {
            for ( const ii of gIndices[gCol] ) {
                if ( board[i][ii] === int ) return false
            }
        }
        return true
    }

    const checkRow = (board, int, row) => {
        // returns true if int is NOT found
        for ( const i of board[row] ) {
            if (i === int) return false
        }
        return true
    }

    const checkCol = (board, int, col) => {
        // returns true if int is NOT found
        for ( const row of board ) {
            if (row[col] === int) return false
        }
        return true
    }

    const solveAtCurrentPosition = ( board, row, col ) => {
        // start by incrementing position
        // If we hit the end of a row, circle to the next row
        if ( col === 8 ) {
            row++
            col = 0
        } else {
            col++
        }
        // if we hit row === 9 we have completed the board!
        if ( row === 9 ) return board

        // if the board has anything other than 0 value, we have a templated number.  Skip forward or return back only!
        if ( board[row][col] !== 0 ) {
            // checks for solution at current position
            let finalBoard = solveAtCurrentPosition( board, row, col )
            // we have a solution? return the board
            if ( !!finalBoard ) return finalBoard
            // we don't have a solution, we need to loop earlier in the board
            else return false
        }
        // =========================================
        //   Passes this point ONLY if value === 0
        // =========================================

        // loop over every possible integer
        for (let int = 1; int < 10; int++) {
            console.log(row, 'x', col)
            // Check the 3 conditions of a valid move
            if ( checkGrid(board, int, row, col) && checkRow(board, int, row) && checkCol(board, int, col) ) {
                // We found a valid move! First update the board
                board[row][col] = int
                // begin recursion!
                let finalBoard = solveAtCurrentPosition( board, row, col )
                // if we receive a finalBoard, we have successfully solved the puzzle!
                // Deliver the good news back down the chain of function calls
                if ( !!finalBoard ) return finalBoard
            }
        }
        // If we complete the loop without returning a finalBoard, something went wrong earlier in the puzzle
        // return false and reset value so we can continue loop there
        board[row][col] = 0
        return false
    }

    finalBoard = solveAtCurrentPosition( sudoku, 0, -1 )

    return finalBoard
}

// console.table(solveSudoku(easySudokuPuzzle));
console.table(solveSudoku(easySudokuPuzzle));