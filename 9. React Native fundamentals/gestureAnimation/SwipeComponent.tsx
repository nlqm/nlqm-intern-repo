import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, GestureHandlerGestureEvent, PanGestureHandler } from 'react-native-gesture-handler'


const SwipeComponent = () => {
  const onGestureEvent = (event: GestureHandlerGestureEvent) => {
    console.log('Swiped!', event.nativeEvent.translationX);
  };

  return (
    <GestureHandlerRootView>
        <PanGestureHandler onGestureEvent={onGestureEvent}>
            <View style={styles.box}>
                <Text>SwipeComponent</Text>
            </View>
        </PanGestureHandler>
    </GestureHandlerRootView>
  )
};

const styles = StyleSheet.create({
    box: {
      width: 200,
      height: 100,
      backgroundColor: 'lightblue',
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default SwipeComponent