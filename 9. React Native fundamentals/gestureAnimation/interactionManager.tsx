import React, { useEffect } from 'react';
import { View, Text, InteractionManager, ActivityIndicator } from 'react-native';

const interactionManager = () => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => setLoading(false), 3000);
    });
  }, []);

  return (
    <View>
      {loading ? <ActivityIndicator size="large" color="blue" /> : <Text>Data Loaded!</Text>}
    </View>
  );
};

export default interactionManager;
