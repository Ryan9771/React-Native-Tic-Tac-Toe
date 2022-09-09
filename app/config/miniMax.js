import { checkWin } from './gameLogicSingleplayer';

/**
 * Returns the best move for the AI to play 
 */
export function bestMove(board) {
    let bestScore = -Infinity;
    let bestMove;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // It is empty
            if (board[i][j] === '-') { 
                board[i][j] = 'O';
                let score = minimax(board, false);
                board[i][j] = '-';
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = [i, j];
                }
            }
        }
    }
    return bestMove;
}

let scores = {
    'X': 1,
    'O': -1,
    'tie': 0,
}

/**
 * Algorithm to determine the optimal move for the AI to do (1 or 0)
 */
function minimax(board, ai) {
    if (checkWin(board)[0] > 0) {
        let winner = checkWin(board)[1];
        return scores[winner];
    }
    // If ai is playing - we want highest score
    if (ai) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '-') {
                    board[i][j] = 'O';
                    let score = minimax(board, false);
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
                    let score = minimax(board, true);
                    board[i][j] = '-'
                    bestScore = Math.min(score, bestScore);
                }
            }
        }
        return bestScore;
    }
}