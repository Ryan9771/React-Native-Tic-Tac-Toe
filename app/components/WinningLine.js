// Draws a line through the winning combination 

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { 
    useAnimatedStyle, 
    useSharedValue, 
    withSpring 
} from 'react-native-reanimated';


// We will define props.winList to be a list of booleans to see which cond won
export default WinningLine = (props) => {
    return (
        <View style={styles.square}>
            <View style={[styles.lineH, styles.winh1]} />
            <View style={[styles.lineH, styles.winh2]} />
            <View style={[styles.lineH, styles.winh3]} />
            {/* <View style={[styles.lineV, styles.winv1]} /> */}
            {/* <View style={[styles.lineV, styles.winv2]} /> */}
            {/* <View style={[styles.lineV, styles.winv3]} /> */}
            {/* <View style={[styles.line, styles.wind1]} /> */}
            {/* <View style={[styles.line, styles.wind2]} /> */}
            {/* <View style={[styles.line, styles.winc1]} /> */}
            {/* <View style={[styles.line, styles.winc2]} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    square: {
        width: '100%',
        height: '50%',
        backgroundColor: "blue",
        opacity: 0.5,
        position: "absolute",
        top: 210,
    },
    lineH: {
        borderTopWidth: 2.5,
        borderTopColor: "red",
        position: "relative",
        width: '80%',
        left: 30,
        // Play with z index
    },
    lineV: {
        borderLeftWidth: 2.5,
        borderLeftColor: "red",
        position: "relative",
        height: '82%',
        top: 30,
        // Play with z index
    },
    winh1: {
        top: 90
    },
    winh2: {
        top: 195
    },
    winh3: {
        top: 300
    },
    winv1: {
        left: 62,
    },
    winv2: {
        left: 195,
    },
    winv3: {
        left: 322
    },
    wind1: {

    },
    wind2: {

    },
    winc1: {

    },
    winc2: {

    },
})