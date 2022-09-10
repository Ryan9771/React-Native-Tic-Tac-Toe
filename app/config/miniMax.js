import { checkWin } from './gameLogicSingleplayer';
import { copyArray } from './copyArray';

/**
 * Returns the best move for the AI to play 
 */
export function bestMove(boardRecieved) {
    const board = copyArray(boardRecieved);
    console.log(board);
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // It is empty
            if (board[i][j] === '-') { 
                console.log("Im here");
                board[i][j] = 'O';
                let score = minimax(board, false, 0);
                console.log(score);
                board[i][j] = '-';
                if (score > bestScore) {
                    bestScore = score;
                    move = {
                        row: i,
                        col: j
                    };
                }
            }
        }
    }
    return move;
}

let scores = {
    'X': -10,
    'O': 10,
    'tie': 0,
}

/**
 * Algorithm to determine the optimal move for the AI to do (1 or 0)
 */
function minimax(board, ai, depth) {
    const win = checkWin(board);
    if (win.winner) {
        return scores[win.winner];
    }
    // If ai is playing - we want highest score
    if (ai) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '-') {
                    board[i][j] = 'O';
                    let score = minimax(board, false, depth+1);
                    board[i][j] = '-';
                    bestScore = Math.max(score, bestScore);
                }
            }
        }
        return bestScore;
    } else {
        // It is the humans turn, so we want the least score (draw / lose)
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '-') {
                    board[i][j] = 'X';
                    let score = minimax(board, true, depth+1);
                    board[i][j] = '-'
                    bestScore = Math.min(score, bestScore);
                }
            }
        }
        return bestScore;
    }
}