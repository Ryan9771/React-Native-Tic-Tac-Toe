// Draws a line through the winning combination 

import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { 
    useAnimatedStyle, 
    useSharedValue, 
    withSpring, 
    withTiming
} from 'react-native-reanimated';
import Svg, { Line } from 'react-native-svg';


export default WinningLine = (props) => {

    const scale = useSharedValue(10);

    const rStyle = useAnimatedStyle(() => {
        return {
            width: scale.value
        }
    }, [])

    useEffect(() => {
        scale.value = withTiming('80%', { duration: 3000 });
    }, [])

    return (
        <View style={styles.square}>
            {/* win_num == 1 when the top row is the winning row */}
            { props.win_num == 1 && <Animated.View style={[rStyle, styles.lineH, styles.win1]} /> }
            { props.win_num == 2 && <View style={[rStyle.lineH, styles.win2]} /> }
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
        opacity: 0.5,
        position: "absolute",
        top: 210,
    },
    lineH: {
        borderTopWidth: 3,
        borderTopColor: "red",
        position: "relative",
        left: 30,
    },
    lineV: {
        borderLeftWidth: 3,
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