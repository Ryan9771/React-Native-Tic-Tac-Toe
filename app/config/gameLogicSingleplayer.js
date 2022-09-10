// Check for a horizontal win
function checkHorizontal(array) {
    for (let i = 0; i < 3; i++) {
        if (array[i][0] !== '-' &&
            array[i][0] === array[i][1] &&
            array[i][1] === array[i][2]) {
            return {
                win: true, 
                winNum: i+1, 
                winner: array[i][0]
            };
        }
    }
    return {
        win: false, 
        winNum: -1, 
        winner: null
    };
}

// Check for a vertical win
function checkVertical(array) {
    for (let i = 0; i < 3; i++) {
        if (array[0][i] !== '-' &&
            array[0][i] === array[1][i] &&
            array[1][i] === array[2][i]) {
                return {
                    win: true,
                    winNum: i+4,
                    winner: array[0][i]
                };
        }
    }
    return {
        win: false, 
        winNum: -1, 
        winner: null
    };
}

// Check for a diagonal win
function checkDiagonal(array) {
    if (array[1][1] !== '-') {
        if (array[0][0] === array[1][1] && array[1][1] == array[2][2]) {
            return {
                win: true,
                winNum: 7,
                winner: array[1][1]
            };
        } 
        if (array[2][0] === array[1][1] && array[1][1] === array[0][2]) {
            return {
                win: true,
                winNum: 8, 
                winner: array[1][1]
            };
        }
    }
    return {
        win: false,
        winNum: -1,
        winner: null
    };
}

// Check for a win
export function checkWin(array) {
    const horizontal = checkHorizontal(array);
    if (horizontal.win) {
        return {
            winNum: horizontal.winNum,
            winner: horizontal.winner
        }
    }
    
    const vertical = checkVertical(array);
    if (vertical.win) {
        return {
            winNum: vertical.winNum,
            winner: vertical.winner
        }
    }

    const diagonal = checkDiagonal(array);
    if (diagonal.win) {
        return {
            winNum: diagonal.winNum,
            winner: diagonal.winner
        }
    }

    if (checkDraw(array)) {
        return  {
            winNum: -1,
            winner: 'tie'
        };
    }

    return {
        winNum: -1,
        winner: null
    };
}

// Check if its a draw
export function checkDraw(array) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (array[i][j] === '-') {
                return false;
            }
        }
    }
    return true;
}