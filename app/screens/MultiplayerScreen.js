import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';


const backgroundImage = require('../assets/paperBackground.webp');
const grid = require('../assets/grid(3).png');

const Screen = () => {


    return (
        <ImageBackground source={ backgroundImage } style={styles.background}>
            <View style={styles.headerWrapper}>
                <Text style={styles.header}>Multiplayer</Text>
            </View>
            <ImageBackground source={ grid } style={styles.grid} resizeMode="contain">

            </ImageBackground>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
    },
    grid: {
        flex: 1
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
    }
})

export default Screen;