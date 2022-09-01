import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';


const backgroundImage = require('../assets/paperBackground.webp');
const grid = require('../assets/grid(3).png');

const Screen = () => {


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
                                <Text>hi</Text>
                            </View>
                            <View style={styles.rowItems}>
                                <Text>hi</Text>
                            </View>
                            <View style={styles.rowItems}>
                                <Text>hi</Text> 
                            </View>  
                        </View>

                        <View style={styles.row}>
                            <View style={styles.rowItems}>
                                <Text>hi</Text>
                            </View>
                            <View style={styles.rowItems}>
                                <Text>hi</Text>
                            </View>
                            <View style={styles.rowItems}>
                                <Text>hi</Text>
                            </View>
                        </View>
                            
                        <View style={styles.row}>
                            <View style={styles.rowItems}>
                                <Text>hi</Text>
                            </View>
                            <View style={styles.rowItems}>
                                <Text>hi</Text>
                            </View>
                            <View style={styles.rowItems}>
                                <Text>hi</Text>
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