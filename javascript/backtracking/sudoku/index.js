const board = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
]

const generateInputTable = () => {

    const inputTable= document.getElementById('input-table')

    let row, col, input

    for (let i = 0; i < 9; i++) {
        row = document.createElement('tr')
        row.className = `row row-${i}`

        for (let ii = 0; ii < 9; ii++) {
            col = document.createElement('td')
            col.className = `col col-${ii}`

            input = document.createElement('input')
            input.type = 'number'
            input.dataset.row = i
            input.dataset.col = ii
            input.addEventListener('change', handleInput)

            col.appendChild(input)
            row.appendChild(col)
        }
        inputTable.appendChild(row)
    }
}

const addSolveEvent = () => {
    const button = document.getElementById('solve-button')
    button.addEventListener('click', handleSubmitClick)
}

const addHideSolutionEvent = () => {
    const button = document.getElementById('hide-button')
    button.addEventListener('click', handleHideSolutionClick)
}

// ========================
// EVENT CALLBACK FUNCTIONS
// ========================

const handleInput = e => {
    // grab value and position from tile
    let value = parseInt(e.target.value)
    const row = parseInt(e.target.dataset.row)
    const col = parseInt(e.target.dataset.col)
    // update value in board
    if (!value) value = 0
    else if (value > 9 || value < 0) {
        alert('value must be between 0 & 9!')
        value = 0
    }
    board[row][col] = value
}

const handleSubmitClick = e => {
    solveSudoku(board)
}

const handleHideSolutionClick = e => {
    const inputTable = document.getElementById('input-table')
    for ( let i = 0; i < 9; i++ ) {
        for ( let ii = 0; ii < 9; ii++ ) {
            const inputCell = inputTable.children[i].children[ii].children[0]
            if (inputCell.className === 'solution-cell') {
                inputCell.value = ''
                board[i][ii] = 0
            }
        }
    }
}

const run = () => {
    generateInputTable()
    addSolveEvent()
    addHideSolutionEvent()
}

run()