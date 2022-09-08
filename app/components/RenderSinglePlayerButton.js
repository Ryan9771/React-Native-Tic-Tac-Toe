import React, { useState } from 'react';
import { Image } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    useAnimatedGestureHandler,
    runOnJS,
    withSpring,
} from 'react-native-reanimated';
import { cross, circle } from '../config/icons';

// The board icon to render - which contains an animation on tap
const BoardIcon = (props) => {

    // Animation Related
    const scale = useSharedValue(1);

    // Use the scale value as animation when pressed
    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
            opacity: scale.value,
        }
    })

    function buttonPressed() {
        // Activate the function in main
        props.clickHandler(props.row, props.col);

        // Set the scale value for animation
        scale.value = 0.8;
        scale.value = withSpring(1, { duration: 1000 })
    }
    // Event handler to activate button animation and main game logic
    const eventHandler = useAnimatedGestureHandler({
        onStart: () => runOnJS(buttonPressed)(),
    })

    // Note: The reason why this animation works for empty cells is cause once pressed,
    //  all animation info is stored in styles etc.. but when the element is re-rendered
    //  (since useState is changed), itll re-render with the animations passed in the 
    //  Animated.View style
    return (
        <TapGestureHandler maxDurationMs={3000} onGestureEvent={eventHandler}>
            <Animated.View style={[rStyle, { width: 80, height: 80 }]}>
                {props.play !== '-' && <Image source={props.play === 'X' ? cross : circle} style={{ width: 80, height: 80 }} />}
            </Animated.View>
        </TapGestureHandler>
    );
}

export default BoardIcon;