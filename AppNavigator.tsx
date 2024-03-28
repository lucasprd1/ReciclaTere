// AppNavigator.tsx
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/pages/HomeScreen';
import Login from './src/pages/Login';
import React from 'react';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator()
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown:false}}  name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}}  name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
