import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, LongPressGestureHandler } from 'react-native-gesture-handler'

const LongPressComponent = () => {
  return (
    <GestureHandlerRootView>
        <LongPressGestureHandler onHandlerStateChange={() => Alert.alert("Long Press Detected!")}>
            <View style={styles.box}>
                <Text>LongPressComponent</Text>
            </View>
        </LongPressGestureHandler>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    box: {
      width: 200,
      height: 100,
      backgroundColor: 'orange',
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default LongPressComponent