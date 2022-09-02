# Things that I have learnt

## Tap Gesture Handler
- Import this from `react-native-gesture-handler`
- This has a `onGestureEvent` where you create above
- This also has a `maxDurationMs` where you can adjust the **max** time for the press
- > Note: If you continue pressing beyond the maxDuration, the gesture will fail and hence get stuck. Hence, extend the duration. You can also use `onFinish` in the `useAnimatedGestureHandler` to provide an ending animation for this.

## useAnimatedGestureHandler
- Import this from the `react-native-reanimated` module!
- Includes `onStart`, `onActive`, `onEnd` and `onFinish`. Use `onFinish` in case of cancellation or failure.

## Animated.View
- Import `Animated` from `react-native-reanimated`, **not** from `react-native`!

## useState
- During the period of that function, if you try using the state's value, it'll show the *previous* value of the state. After the function is completed, it'll update. Therefore, keep whatever you want in a constant, update it but still use the same constant. 

### Things to find out / do in future
- Find out how to animate eg: a button highlighted until released
- Find out how to transfer one handler to another: eg: 
    - tap ball to highlight and scale
    - Long press to drag around