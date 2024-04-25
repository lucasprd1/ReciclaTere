import * as React from 'react';
import { View, Text, StyleSheet, ButtonProps, Button, Image, Pressable, TextInput    } from 'react-native';
import User from '../models/User'

const user: User = {
	Email: "",
	Password: ""
}

export default function Register(NavegatorService:NavegatorService) {
  return (
	  <View style={styles.container}>
		<View style={styles.inputConteiner}>
			<Text style={styles.InputText}>Email:</Text>
        	<TextInput style={styles.input} onChangeText={text => {}} />
		</View>
		<View style={styles.space}/>
		<View style={styles.inputConteiner}>
			<Text style={styles.InputText}>Senha:</Text>
        	<TextInput style={styles.input} onChangeText={text => {}} />
		</View>
		<View style={styles.space}/>
		<View style={styles.inputConteiner}>
			<Text style={styles.InputText}>Repita a senha:</Text>
        	<TextInput style={styles.input} onChangeText={text => {}} />
		</View>
		<View style={styles.space}/>
		<View style={styles.Btns}>
			<Pressable onPress={() => {NavegatorService.navigation.navigate('Login')}} android_ripple={{color: 'dark-green'}} style={styles.button}>
			<Text style={styles.buttonText}>Registrar</Text>
			</Pressable>
			<Pressable onPress={() => {NavegatorService.navigation.navigate('Login')}} android_ripple={{color: 'dark-green'}} style={styles.button}>
			<Text style={styles.buttonText}>Voltar</Text>
			</Pressable>
		</View>
    </View>
  );
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
		marginTop: 150,
	},
	Btns:{
		flexDirection: 'row'
	},
	input: {
		borderColor: "gray",
		
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,

	},
	passwordRecover:{
		alignSelf:'flex-end', 
		marginRight:'13%', 
		borderBottomWidth: 1, 
		borderBlockColor: 'mediumslateblue'
	},
	inputConteiner:{
		width: "75%"
	},
	space:{
		padding: 10
	},
	InputText:{
		color:"#404040",
		fontWeight: "bold",
		fontSize: 15
	},
	InputCreateAcount:{
		color:"#404040",
		fontWeight: "bold",
		fontSize: 15,
		borderBottomWidth: 1, 
		borderBlockColor: 'mediumslateblue',
		marginTop: 20
	},
	LoginImage:{
		borderColor: "darkgrey",
		borderRadius: 100,
		width: 150,
		height: 150,
		borderWidth: 2,
		paddingStart: -25
	},
    button: {
      backgroundColor: 'mediumslateblue',
      borderRadius: 5,
      width: 150,
	  height: 30,
	  margin: 10,
	  elevation: 0
    },
    buttonText: {
      color: '#fff',
      fontSize: 19,
      alignSelf: 'center',
	  padding: 5,
      fontWeight: 'bold'
    }
});
  