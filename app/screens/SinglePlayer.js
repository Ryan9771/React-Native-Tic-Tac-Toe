import React, { useState } from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View } from 'react-native';
import BoardIcon from '../components/RenderSinglePlayerButton';
import { copyArray } from '../config/copyArray';
import { grid, backgroundImage } from '../config/icons';
import { checkDraw, checkWin } from '../config/gameLogicSingleplayer';
import ConfettiCannon from 'react-native-confetti-cannon';
import GameOverBanner from '../components/GameOverBannerSinglePlayer';
import WinningLine from '../components/WinningLine';
import { bestMove } from '../config/miniMax';

// Main component for the screen
const Screen = ({ navigation }) => {

    // The gameBoard to note which cell has what
    const [gameBoard, setGameBoard] = useState([
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
    ]);

    // State for player turn. If false -> X's turn; If true -> O's turn
    const [playerTurn, setPlayerTurn] = useState(true);
    // GameOver
    const [gameOver, setGameOver] = useState(false);
    // Draw
    const [draw, setDraw] = useState(false);
    // Win
    const [win, setWin] = useState(-1);

    // Function to reset game
    function resetGame() {
        const newArray = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ];
        setGameBoard(newArray);
        setGameOver(false);
        setDraw(false);
        setPlayerTurn(true);
        setWin(-1);
    }

    // Function to check win or draw
    function handleWin(newArray) {
	    const winNum = checkWin(newArray).winNum;
        const hasDraw = checkDraw(newArray);
   
        if (winNum !== -1) {
 	        setDraw(false);
            setGameOver(true);
            setWin(winNum);
        } else if (hasDraw) {
 	        setDraw(true);
            setGameOver(true);
        }
        return winNum !== -1 || hasDraw;
    }


    // Function to call game logic
    function gridClick(row, col) {
        if (gameBoard[row][col] !== '-' || gameOver) {
            // TODO: Give some error message saying its already occupied
        } else {
            let newArray;
	        // It'll always be human turn first, so no need for if else
            newArray = copyArray(gameBoard);
            newArray[row][col] = 'X';
            if (!handleWin(newArray)) {
                // AI Move
                const location = bestMove(newArray);
                newArray[location.row][location.col] = 'O';
                handleWin(newArray);
            }
            setGameBoard(newArray);

        }

    }

    // Returns component
    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            {/* Header*/}
            <View style={styles.headerWrapper}>
                <Text style={styles.header}>🔥 Single Player 🔥</Text>
            </View>

            <TouchableOpacity 
                style={styles.backBtn}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.backBtnText}>{"< Back"}</Text>
            </TouchableOpacity>

            {/* The Grid */}
            <View style={styles.gridWrapper}>

                {/* Things that appear on win condition */}
                {
                    (win !== -1) &&
                    <ConfettiCannon
                        count={300}
                        origin={{ x: 100, y: 1000 }}
                        explosionSpeed={350}
                        fadeOut={true}
                    />

                }
                {gameOver && <GameOverBanner turn={playerTurn ? 1 : 2} draw={draw} />}
                <WinningLine win_num={win}/>


                <ImageBackground source={grid} style={styles.grid} resizeMode="contain">

                    <View style={styles.btnGrids}>

                        <View style={styles.row}>

                            <View style={styles.rowItems}>
                                <BoardIcon
                                    play={gameBoard[0][0]}
                                    row={0}
                                    col={0}
                                    clickHandler={gridClick}
                                    gameOver={gameOver}
                                />
                            </View>

                            <View style={styles.rowItems}>
                                <BoardIcon
                                    play={gameBoard[0][1]}
                                    row={0}
                                    col={1}
                                    clickHandler={gridClick}
                                    gameOver={gameOver}
                                />
                            </View>

                            <View style={styles.rowItems}>
                                <BoardIcon
                                    play={gameBoard[0][2]}
                                    row={0}
                                    col={2}
                                    clickHandler={gridClick}
                                    gameOver={gameOver}
                                />
                            </View>

                        </View>

                        <View style={styles.row}>

                            <View style={styles.rowItems}>
                                <BoardIcon
                                    play={gameBoard[1][0]}
                                    row={1}
                                    col={0}
                                    clickHandler={gridClick}
                                    gameOver={gameOver}
                                />
                            </View>

                            <View style={styles.rowItems}>
                                <BoardIcon
                                    play={gameBoard[1][1]}
                                    row={1}
                                    col={1}
                                    clickHandler={gridClick}
                                    gameOver={gameOver}
                                />
                            </View>

                            <View style={styles.rowItems}>
                                <BoardIcon
                                    play={gameBoard[1][2]}
                                    row={1}
                                    col={2}
                                    clickHandler={gridClick}
                                    gameOver={gameOver}
                                />
                            </View>

                        </View>

                        <View style={styles.row}>

                            <View style={styles.rowItems}>
                                <BoardIcon
                                    play={gameBoard[2][0]}
                                    row={2}
                                    col={0}
                                    clickHandler={gridClick}
                                    gameOver={gameOver}
                                />
                            </View>

                            <View style={styles.rowItems}>
                                <BoardIcon
                                    play={gameBoard[2][1]}
                                    row={2}
                                    col={1}
                                    clickHandler={gridClick}
                                    gameOver={gameOver}
                                />
                            </View>

                            <View style={styles.rowItems}>
                                <BoardIcon
                                    play={gameBoard[2][2]}
                                    row={2}
                                    col={2}
                                    clickHandler={gridClick}
                                    gameOver={gameOver}
                                />
                            </View>

                        </View>
                    </View>

                </ImageBackground>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.resetBtn}
                    activeOpacity={0.6}
                    onPress={resetGame}
                >
                    <Text style={styles.resetText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
    },
    btnGrids: {
        width: '100%',
        height: '40%',
        flexDirection: "column",
        justifyContent: "center"
    },
    backBtn: {
        position: "absolute",
        top: 50,
        left: 20,
        zIndex: 1,
    }, 
    backBtnText: {
        fontSize: 18,
    },
    gridWrapper: {
        flex: 1
    },
    grid: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        fontWeight: "bold",
        fontSize: "28",
        color: "#C41E3A",
    },
    headerWrapper: {
        position: "absolute",
        top: 80,
        width: '100%',
        alignItems: "center",
    },
    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },
    rowItems: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    resetBtn: {
        width: '30%',
        height: 30,
        alignSelf: "center",
        bottom: 150,
        justifyContent: "center",
        alignItems: "center"
    },
    resetText: {
        fontSize: 22,
        color: "#881337",
        fontWeight: "bold"
    }

})

export default Screen;
