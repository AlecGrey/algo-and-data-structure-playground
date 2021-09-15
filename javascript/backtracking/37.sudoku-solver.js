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
        for ( const i of board[row] ) {
            if (i === int) return false
        }
        return true
    }

    const checkCol = (board, int, col) => {
        for ( const row of board ) {
            if (row[col] === int) return false
        }
        return true
    }

    const solveAtCurrentPosition = ( board, row, col ) => {
        // increment position, allow to start new rows
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
            // no solution yet found, backtrack
            else return false
        }
        // loop over every possible integer
        for (let int = 1; int < 10; int++) {
            let num = int.toString()
            // Check the 3 conditions of a valid move
            if ( checkGrid(board, num, row, col) && checkRow(board, num, row) && checkCol(board, num, col) ) {
                // We found a valid move! First update the board
                board[row][col] = num
                // begin recursion!
                let finalBoard = solveAtCurrentPosition( board, row, col )
                // if a board is returned as opposed to false, we solved the board!
                if ( !!finalBoard ) return finalBoard
            }
        }
        // if we reach this point all digits have been tested and none passed, backtrack
        board[row][col] = '.'
        return false
    }
    // entry point
    finalBoard = solveAtCurrentPosition( sudoku, 0, -1 )
};
// @lc code=end

