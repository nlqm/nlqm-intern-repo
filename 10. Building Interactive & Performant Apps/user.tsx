import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';
import axiosRetry from 'axios-retry';

const API_URL = 'https://jsonplaceholder.typicode.com/users/a';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
});

axiosRetry(apiClient, {
  retries: 3,
  retryDelay: (retryCount) => retryCount * 1000,
  retryCondition: (error) => !error.response || error.response.status >= 500, // Retry on network failures or server errors
});

// Interceptor: Cache responses to avoid duplicate API calls
const cache = new Map();
apiClient.interceptors.response.use((response) => {
  cache.set(response.config.url, response.data);
  return response;
});

const fetchUserData = async () => {
  try {
    if (cache.has(API_URL)) {
      console.log('Fetching from cache...');
      return cache.get(API_URL);
    }
    console.log('Fetching from API...');
    const response = await apiClient.get('/users/2');
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`Server Error: ${error.response.status}`);
    } else if (error.request) {
      throw new Error('Network Error: No response from server');
    } else {
      throw new Error(`Unexpected Error: ${error.message}`);
    }
  }
};

const User: React.FC = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUserData();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      {user && <Text>User: {user.name}</Text>}
      <Button title="Reload User" onPress={loadUser} />
    </View>
  );
};

export default User;