import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import BoardIcon from '../components/RenderButton';


function copyArray(array) {
    const res = [];
    for (let i = 0; i < 3; i++) {
        res.push(array[i].slice())
    }
    return res;
}

const backgroundImage = require('../assets/paperBackground.webp');
const grid = require('../assets/grid.png');

const Screen = () => {

    const [gameBoard, setGameBoard] = useState([
        [0, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ]);

    const [playerTurn, setPlayerTurn] = useState(false); // X -> False O -> True

    function gridClick(row, col) {
        if (gameBoard[row][col] !== -1) {
            // Give some error message saying its already occupied
            console.log("This cell is occupied");
        } else {
            const newArray = copyArray(gameBoard);
            newArray[row][col] = playerTurn ? 1 : 0;
            setGameBoard(newArray);
            setPlayerTurn(!playerTurn);
        }
    }


    return (
        <ImageBackground source={ backgroundImage } style={styles.background}>
            <View style={styles.headerWrapper}>
                <Text style={styles.header}>Multiplayer</Text>
            </View>
            <View style={styles.gridWrapper}>
                <ImageBackground source={ grid } style={styles.grid} resizeMode="contain">

                    <View style={styles.btnGrids}>

                        <View style={styles.row}>

                            <View style={styles.rowItems}>
                                <BoardIcon 
                                    play={gameBoard[0][0]}
                                    row = {0}
                                    col = {0}
                                    clickHandler = {gridClick}
                                />
                            </View>

                            <View style={styles.rowItems}>
                                <BoardIcon play={gameBoard[0][1]}/>
                            </View>

                            <View style={styles.rowItems}>
                                <BoardIcon play={gameBoard[0][2]}/> 
                            </View>  

                        </View>

                        <View style={styles.row}>

                            <View style={styles.rowItems}>
                                <BoardIcon play={gameBoard[1][0]}/>
                            </View>

                            <View style={styles.rowItems}>
                                <BoardIcon play={gameBoard[1][1]}/>
                            </View>

                            <View style={styles.rowItems}>
                                <BoardIcon play={gameBoard[1][2]}/>
                            </View>

                        </View>
                            
                        <View style={styles.row}>

                            <View style={styles.rowItems}>
                                <BoardIcon play={gameBoard[2][0]}/>
                            </View>

                            <View style={styles.rowItems}>
                                <BoardIcon play={gameBoard[2][1]}/>
                            </View>

                            <View style={styles.rowItems}>
                                <BoardIcon play={gameBoard[2][2]}/>
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
        fontSize: "25",
    },
    headerWrapper: {
        position: "absolute",
        top: 70,
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