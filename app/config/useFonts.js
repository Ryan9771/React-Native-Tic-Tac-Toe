import * as Font from "expo-font";

export default useFonts = async() => {
    await Font.loadAsync({
        'GameFont': require('../assets/fonts/PermanentMarker-Regular.ttf')
    });
}