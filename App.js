import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Multiplayer from './app/screens/MultiplayerScreen';
import SinglePlayer from './app/screens/SinglePlayer';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Home"}
      >
        <Stack.Screen 
          name={"SinglePlayer"}
          component={SinglePlayer}
        />
        <Stack.Screen 
          name={"Home"}
          component={WelcomeScreen}
        />
        <Stack.Screen 
          name={"MultiPlayer"}
          component={Multiplayer}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;