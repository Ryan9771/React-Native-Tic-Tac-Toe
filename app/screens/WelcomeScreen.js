import React from 'react';
import { 
    TouchableOpacity, 
    View, 
    StyleSheet, 
    Text, 
    ImageBackground 
} from 'react-native';
import { backgroundImage } from '../config/icons';

export default WelcomeScreen = ({navigation}) => {
    return (
        <ImageBackground
            source={backgroundImage}
            style={styles.background}
        >
            <View style={styles.wrapper}>
                <Text style={styles.text}>Select Your Mode</Text>
                <View style={styles.btnCtn}>
                    <TouchableOpacity 
                        styles={styles.btn}
                        onPress={() => navigation.navigate('SinglePlayer')}
                    >
                        <Text style={styles.btnText}>Single Player</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        styles={styles.btn}
                        onPress={() => navigation.navigate('MultiPlayer')}
                    >
                        <Text style={styles.btnText}>Multi Player</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        flex: 1
    },
    btnCtn: {
        marginTop: 60,
        width: '80%',
        flexDirection: "row",
        justifyContent: "space-around"
    },
    btnText: {
        fontSize: 18,
        fontWeight: '500'
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
    },
    wrapper: {
        width: '90%',
        height: '30%',
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 50
    }
})