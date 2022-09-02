// Check for a horizontal win
function checkHorizontal(array) {
    for (let i = 0; i < 3; i++) {
        if (array[i][0] !== -1 &&
            array[i][0] === array[i][1] &&
            array[i][1] === array[i][2]) {
            return true;
        }
    }
    return false;
}

// Check for a vertical win
function checkVertical(array) {
    for (let i = 0; i < 3; i++) {
        if (array[0][i] !== -1 &&
            array[0][i] === array[1][i] &&
            array[1][i] === array[2][i]) {
            return true;
        }
    }
    return false;
}

// Check for a diagonal win
function checkDiagonal(array) {
    return (array[1][1] !== -1) &&
        (
            (array[0][0] === array[1][1] && array[1][1] == array[2][2]) ||
            (array[2][0] === array[1][1] && array[1][1] === array[0][2])
        )
}

// Check for a win
export function checkWin(array) {
    return checkHorizontal(array) ||
        checkDiagonal(array) ||
        checkVertical(array);
}

// Check if its a draw
export function checkDraw(array) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (array[i][j] === -1) {
                return false;
            }
        }
    }
    return true;
}