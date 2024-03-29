import * as React from 'react';
import { View, Text, StyleSheet, ButtonProps, Button, Image, Pressable    } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import NavegatorService from '../service/NavegatorService'

export default function HomeScreen(NavegatorService:NavegatorService) {
  return (
    <View style={styles.base}>
        <Text style={styles.title}>Recicla Tere</Text>
        <Image style={styles.logo} source={require('../assets/Img/simbolo-de-reciclagem.png')} />
        <Pressable onPress={() => NavegatorService.navigation.navigate('Login')} android_ripple={{color: 'dark-green'}}  style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </Pressable  >
    </View>
  );
}

const styles = StyleSheet.create({
    logo:{
      marginTop: 150,
      width: 250,
      height: 250
    },
    button: {
      backgroundColor: 'green',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 10,
      width: 150,
      position: 'absolute',
      bottom: 20,
      elevation:0
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      alignSelf: 'center',
      fontWeight: 'bold'
    },
    base:{
      flex: 1, alignItems: 'center', justifyContent: 'flex-start'
    },
    title:{
      fontSize: 50, fontWeight: 'bold', color: 'green', paddingTop: 50
    },
    card:{
        height: 500,
        width: 300,
        borderRadius: 150 / 2,
        backgroundColor: '#fff'
    },

    baseText: {
      fontWeight: 'bold',
    },
    innerText: {
      color: 'red',
    },
  });
  