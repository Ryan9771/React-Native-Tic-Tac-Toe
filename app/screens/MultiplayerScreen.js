import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import BoardIcon from '../components/RenderButton';
import { copyArray } from '../config/copyArray';
import { grid, backgroundImage } from '../config/icons';
import { checkDraw, checkWin } from '../config/gameLogic';
import ConfettiCannon from 'react-native-confetti-cannon';
import WinnerBanner from '../components/GameOverBanner';


// Main component for the screen
const Screen = () => {

    // The gameBoard to note which cell has what
    const [gameBoard, setGameBoard] = useState([
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ]);
    // State for player turn. If false -> X's turn; If true -> O's turn
    const [playerTurn, setPlayerTurn] = useState(false);
    // GameOver
    const [gameOver, setGameOver] = useState(false);
    // Draw
    const [draw, setDraw] = useState(false);
    // Win
    const [win, setWin] = useState(false);

    // Function to call game logic
    function gridClick(row, col) {
        if (gameBoard[row][col] !== -1 || gameOver) {
            // Give some error message saying its already occupied
            console.log("This cell is occupied");
            return gameBoard[row][col];
        } else {
            const res = playerTurn ? 1 : 0;
            const newArray = copyArray(gameBoard);
            newArray[row][col] = res;
            setGameBoard(newArray);
            setPlayerTurn(!playerTurn);

            /* Game Logic */
            // Check win and draw
            const win = checkWin(newArray);
            const hasDraw = checkDraw(newArray);

            if (win) {
                setDraw(false);
                setGameOver(true);
                setWin(true);
            } else if (hasDraw) {
                setDraw(true);
                setGameOver(true);
            }

            return res;
        }
        
    }

    // Returns component
    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View style={styles.headerWrapper}>
                <Text style={styles.header}>Multiplayer</Text>
            </View>
            <View style={styles.gridWrapper}>
                {
                    win && 
                    <ConfettiCannon 
                        count={300} 
                        origin={{x: 100, y: 1000}} 
                        explosionSpeed={350}
                        fadeOut={true}
                     />

                }
                { gameOver && <WinnerBanner turn={playerTurn ? 1 : 2} draw={draw}/>}
                <ImageBackground source={grid} style={styles.grid} resizeMode="contain">

                    <View style={styles.btnGrids}>

                        <View style={styles.row}>

                            <View style={styles.rowItems}>
                                <BoardIcon
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
        fontStyle: "italic",
        color: "#92400e"
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
    }

})

export default Screen;