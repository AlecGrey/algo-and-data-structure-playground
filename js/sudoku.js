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

const hardSudokuPuzzle = [
    [0, 7, 1, 2, 0, 4, 0, 0, 0],
    [8, 0, 5, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 6, 0, 2, 0],
    [3, 0, 2, 6, 0, 0, 8, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 5],
    [0, 9, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 9, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 4, 3, 0, 0, 0, 6, 2]
]

// ============
//   IDEATION
// ============
// - A sudoku's original format must not be altered, but used as a reference to update a new board
// - Create functions to return boolean for whether an integer is valid at a row / column / grid
// - Construct array of arrays to hold viable solutions? If array.length === 1 populate solution board
const gIndices = [ [ 0, 1, 2 ], [ 3, 4, 5 ], [6, 7, 8] ]


const solveSudoku = sudoku => {

    const solution = [
        [...sudoku[0]],
        [...sudoku[1]],
        [...sudoku[2]],
        [...sudoku[3]],
        [...sudoku[4]],
        [...sudoku[5]],
        [...sudoku[6]],
        [...sudoku[7]],
        [...sudoku[8]]
    ]

    const checkGrid = (sol, int, row, col) => {
        // returns true if int is NOT found
        const gRow = Math.floor( row / 3 )
        const gCol = Math.floor( col / 3 )
    
        for ( const i of gIndices[gRow] ) {
            for ( const ii of gIndices[gCol] ) {
                if ( sol[i][ii] === int ) return false
            }
        }
        return true
    }

    const checkRow = (sol, int, row) => {
        for ( const i of sol[row] ) {
            if (i === int) return false
        }
        return true
    }

    const checkCol = (sol, int, col) => {
        for ( const row of sol ) {
            if (row[col] === int) return false
        }
        return true
    }

    let r = 0
    let c = 0
    let reIterate = false

    while (r < 9) {
        while (c < 9) {
            // sudokuValue is the value of the input board at that grid location
            let currentValue = solution[r][c]
            let options = []

            if ( currentValue !== 0 ) {
                // CONTINUE IF WE ALREADY FOUND A VIABLE SOLUTION HERE
                c++
                continue
            } else {
                // LOGIC FOR SEARCHING THE BOARD.  WE ONLY ASSIGN A VALUE IF THERE IS A SINGLE VIABLE SOLUTION
                for (let int = 1; int < 10; int++) {
                    if ( checkGrid( solution, int, r, c ) && checkRow( solution, int, r ) && checkCol( solution, int, c ) ) options.push(int)

                    if (options.length > 1) break
                }
                console.log(r, 'x', c, options)

                if (options.length > 1) {
                    reIterate = true
                    console.log('reIterate:', reIterate)
                }

                else if ( options.length === 1 ) {
                    solution[r][c] = options[0]
                    if ( !reIterate ) continue
                    else {
                        r = -1
                        reIterate = false
                        break
                    }
                }

                c++
            }
        }
    c = 0
    r++
    }
    return solution
}

// THIS SOLUTION DOES NOT WORK IN ALL ( OR MOST ) CASES. IT ONLY SOLVES PUZZLES THAT ARE 
// EASY ENOUGH TO HAVE SINGLE NUMBER SOLUTIONS ALL THE WAY THROUGH BUT WILL FAIL OTHERWISE

// ====================================================================== //
// IMPLEMENT A BACKTRACKING / DEPTH FIRST SEARCH METHOD TO SOLVE THE PUZZLE!
// ====================================================================== //

console.table(solveSudoku(easySudokuPuzzle))
// console.table(solveSudoku(hardSudokuPuzzle))