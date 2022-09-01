import React from 'react';
import { Image, View } from 'react-native';

const BoardIcon = (props) => {

    if (props.play === 1) {
        return (
            <Image 
                source={require('../assets/circle.png')} 
                style={{ width: 80, height: 80 }} 
            />
        );
    } else if (props.play === 0) {
        return (
            <Image 
                source={require('../assets/cross1.png')} 
                style={{ width: 80, height: 80 }} 
            />
        );
    }
    return <View />

}

export default BoardIcon;