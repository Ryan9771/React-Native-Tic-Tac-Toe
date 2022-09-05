import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default GameOverBanner = (props) => {

    const progress = useSharedValue(0);

    const rStyles = useAnimatedStyle(() => {
        return {
            position: "absolute",
            top: 150,
            width: '80%',
            height: 40,
            alignSelf: "center",
            borderRadius: 15,
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            transform: [
                { scale: progress.value / 32 }
            ],
            opacity: progress.value / 43
        }
    })

    useEffect(() => {
        progress.value = withSpring(43, { duration: 700 })
    }, [])

    return (
        <Animated.View style={rStyles}>
            <Text style={styles.text}>
                {props.draw ? "🤝 It's a draw 🤝"
                    : `🎉 Player ${props.turn} has won 🎉`}

            </Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: "#15803d",
        textAlign: "center",
        fontWeight: "bold",
        flex: 1,
        textAlignVertical: "center",

    }
})