import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

const FadeInBox = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, []);

  return <Animated.View style={[styles.box, { opacity: fadeAnim }]} />;
};

const styles = StyleSheet.create({
  box: { width: 100, height: 100, backgroundColor: 'red' },
});

export default FadeInBox;
