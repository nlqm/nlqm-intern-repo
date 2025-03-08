import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

const User: React.FC = () => {
  const [ user, setUser ] = useState<{ name: string } | null>(null);

  useEffect(() => {
    fetch(API_URL)
        .then((respone) => respone.json())
        .then((data) => setUser(data) );
  }, []);

  if (!user) return <Text>Loading..</Text>;

  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  );
};

export default User