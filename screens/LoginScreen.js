import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Perform login logic here
    // For demonstration purposes, let's assume the login is successful
    // You can replace this with your actual login logic
    const loginSuccess = true;

    if (loginSuccess) {
      // Navigate to the "App" screen after successful login
      navigation.navigate('App');
    } else {
      // Handle login failure (e.g., display an error message)
      alert('Login failed. Please try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen </Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
