import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { 
    useAnimatedStyle, 
    useSharedValue, 
    useAnimatedGestureHandler, 
    runOnJS,
    withSpring, 
} from 'react-native-reanimated';

const BoardIcon = (props) => {
// Maybe the reason why the images overflowed is cause didn't wrap it here in a View

    const [img, setImg] = useState(require('../assets/cross.png'));

    // Animation Related
    const scale = useSharedValue(1);

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {scale: scale.value}
            ],
            opacity: scale.value,
        }
    })


    function buttonPressed() {

        props.clickHandler(props.row, props.col);

        // Image uri
        if (props.play === 0) {
            setImg(require('../assets/cross.png'));
        } else if (props.play === 1) {
            setImg(require('../assets/circle.png'));
        }

        scale.value = 0.7;
        scale.value = withSpring(1, { duration: 1000 });
        

    }

    const eventHandler = useAnimatedGestureHandler({
        onStart: () => runOnJS(buttonPressed)(),
        onEnd: () => console.log("Ended")
    })

    if (props.play === -1) {
        return <View />;
    } 
    return (
        <TapGestureHandler onGestureEvent={eventHandler}>
            <Animated.View style={[rStyle]}>
                <Image 
                source={img} 
                style={{ width: 80, height: 80 }} 
                />
            </Animated.View>
        </TapGestureHandler>
        
    );
    
}

export default BoardIcon;