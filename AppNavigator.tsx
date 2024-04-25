// AppNavigator.tsx
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/pages/HomeScreen';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import MateriaisReciclaveis from './src/pages/MateriaisReciclaveis';
import React from 'react';
import {RootStackParamList} from './src/service/NavegatorService'
import TelaConfig from './src/pages/TelaConfig';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator()
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown:false}}  name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}}  name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}}  name="Register" component={Register} />
        <Stack.Screen options={{headerShown:false}}  name="MateriaisReciclaveis" component={MateriaisReciclaveis} />
        <Stack.Screen options={{headerShown:false}}  name="TelaConfig" component={TelaConfig} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
