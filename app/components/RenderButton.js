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

const BoardIcon = (props) => {

    const [img, setImg] = useState(cross);
    const [player, setPlayer] = useState(-1);

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
        const play = props.clickHandler(props.row, props.col);
        setPlayer(play);
        // Image uri
        if (play === 0) {
            setImg(cross);
        } else if (play === 1) {
            setImg(circle);
        }

        // Set the scale value for animation
        scale.value = 0.8;
        scale.value = withSpring(1, { duration: 1000 })
    }
    // Event handler to activate button animation and main game logic
    const eventHandler = useAnimatedGestureHandler({
        onStart: () => runOnJS(buttonPressed)(),
    })

    return (
        <TapGestureHandler maxDurationMs={3000} onGestureEvent={eventHandler}>
            <Animated.View style={[rStyle, {width: 80, height: 80}]}>
                {console.log(player)}
                {player !== -1 && <Image source={img} style={{ width: 80, height: 80 }} />}
            </Animated.View>
        </TapGestureHandler>
    );
}

export default BoardIcon;