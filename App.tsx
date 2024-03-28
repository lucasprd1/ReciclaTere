
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator  from "./AppNavigator";
import HomeScreen from './src/pages/HomeScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppNavigator />
  );
}