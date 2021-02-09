/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(sudoku) {

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
        if ( board[row][col] !== '.' ) {
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
            let num = int.toString()
            // Check the 3 conditions of a valid move
            if ( checkGrid(board, num, row, col) && checkRow(board, num, row) && checkCol(board, num, col) ) {
                // We found a valid move! First update the board
                board[row][col] = num
                // begin recursion!
                let finalBoard = solveAtCurrentPosition( board, row, col )
                // if we receive a finalBoard, we have successfully solved the puzzle!
                // Deliver the good news back down the chain of function calls
                if ( !!finalBoard ) return finalBoard
            }
        }
        // If we complete the loop without returning a finalBoard, something went wrong earlier in the puzzle
        // return false and reset value so we can continue loop there
        board[row][col] = '.'
        return false
    }

    finalBoard = solveAtCurrentPosition( sudoku, 0, -1 ) 
};
// @lc code=end

