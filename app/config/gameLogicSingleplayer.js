// Check for a horizontal win
function checkHorizontal(array) {
    for (let i = 0; i < 3; i++) {
        if (array[i][0] !== '-' &&
            array[i][0] === array[i][1] &&
            array[i][1] === array[i][2]) {
            return [true, i + 1, array[i][0]];
        }
    }
    return [false, -1];
}

// Check for a vertical win
function checkVertical(array) {
    for (let i = 0; i < 3; i++) {
        if (array[0][i] !== '-' &&
            array[0][i] === array[1][i] &&
            array[1][i] === array[2][i]) {
            return [true, i + 4], array[0][i];
        }
    }
    return [false, -1];
}

// Check for a diagonal win
function checkDiagonal(array) {
    if (array[1][1] !== '-') {
        if (array[0][0] === array[1][1] && array[1][1] == array[2][2]) {
            return [true, 7, array[1][1]];
        } 
        if (array[2][0] === array[1][1] && array[1][1] === array[0][2]) {
            return [true, 8, array[1][1]];
        }
    }
    return [false, -1];
}

// Check for a win
export function checkWin(array) {
    const [winHorizontal, winHorizontalNum] = checkHorizontal(array);
    if (winHorizontal) {
        return winHorizontalNum;
    }
    
    const [winVertical, winVerticalNum] = checkVertical(array);
    if (winVertical) {
        return winVerticalNum;
    }

    const [winDiagonal, winDiagonalNum] = checkDiagonal(array);
    if (winDiagonal) {
        return winDiagonalNum;
    }

    return -1;
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
    return [true];
}