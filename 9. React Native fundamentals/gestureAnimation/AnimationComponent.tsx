import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const AnimatedBox = () => {
  const animation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: animation.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Move Right" onPress={() => (animation.value = withTiming(150, { duration: 500 }))} />
      <Button title="Move Left" onPress={() => (animation.value = withTiming(-150, { duration: 500}))} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  box: { width: 100, height: 100, backgroundColor: 'blue' },
});

export default AnimatedBox;
