// Draws a line through the winning combination 

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { 
    useAnimatedStyle, 
    useSharedValue, 
    withSpring 
} from 'react-native-reanimated';
import Svg, { Line } from 'react-native-svg';


// We will define props.winList to be a list of booleans to see which cond won
export default WinningLine = (props) => {
    return (
        <View style={styles.square}>
            { props.win_num == 1 && <View style={[styles.lineH, styles.win1]} /> }
            { props.win_num == 2 && <View style={[styles.lineH, styles.win2]} /> }
            { props.win_num == 3 && <View style={[styles.lineH, styles.win3]} /> }
            { props.win_num == 4 && <View style={[styles.lineV, styles.win4]} /> }
            { props.win_num == 5 && <View style={[styles.lineV, styles.win5]} /> }
            { props.win_num == 6 && <View style={[styles.lineV, styles.win6]} /> }
            {
                props.win_num == 7 && 
                <Svg height="900" width="900">
                    <Line x1="30" y1="50" x2="350" y2="340" stroke="red" strokeWidth="2.5" />
                </Svg> 
            }
            {
                props.win_num == 8 &&
                <Svg height="900" width="900">
                    <Line x1="30" y1="340" x2="350" y2="60" stroke="red" strokeWidth="2.5" />
                </Svg>
            }
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
    win1: {
        top: 90
    },
    win2: {
        top: 195
    },
    win3: {
        top: 300
    },
    win4: {
        left: 62,
    },
    win5: {
        left: 195,
    },
    win6: {
        left: 322
    }
})