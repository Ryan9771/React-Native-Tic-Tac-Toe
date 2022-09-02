# Things that I have learnt

## Tap Gesture Handler
- Import this from `react-native-gesture-handler`
- This has a `onGestureEvent` where you create above
- This also has a `maxDurationMs` where you can adjust the **max** time for the press
- > Note: If you continue pressing beyond the maxDuration, the gesture will fail and hence get stuck. Hence, extend the duration. You can also use `onFinish` in the `useAnimatedGestureHandler` to provide an ending animation for this.


## useAnimatedGestureHandler
- Import this from the `react-native-reanimated` module!
- Includes `onStart`, `onActive`, `onEnd` and `onFinish`. Use `onFinish` in case of cancellation or failure.