import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Login extends Component {
	state = {
		email: '',
		password: ''
	}
	
	handleEmail = (text) => {
		this.setState({ email: text })
	}
	
	handlePassword = (text) => {
		this.setState({ password: text })
	}
	
	login = (email, pass) => {
		alert('Tout est bon: ' + email + ' et ' + pass)
		//On met la méthode fetch en post pour connexion
		const params = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				login: email,
				password: pass,
			})
		};
		fetch('http://touten5.net/traiteconnexion.php', params)
			.then(response => response.json())
			.then(data => console.log(data));
			//A ce then il faut une fonction qui renvoie la liste d'ecoles en component si bien connecté
	}
	
	render(){
		return(
			<View style = {styles.container}>
				<TextInput style = {styles.input}
					underlineColorAndroid = "transparent"
					placeholder = "Téléphone"
					placeholderTextColor = "#9a73ef"
					autoCapitalize = "none"
					onChangeText = {this.handleEmail}/>
				<TextInput style = {styles.input}
					underlineColorAndroid = "transparent"
					placeholder = "Mot de passe"
					placeholderTextColor = "#9a73ef"
					autoCapitalize = "none"
					onChangeText = {this.handlePassword}/>
				<TouchableOpacity
					style = {styles.submitButton}
					onPress = {
					() => this.login(this.state.email, this.state.password)
					}>
					<Text style = {styles.submitButtonText}> Connexion </Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default Login

const styles = StyleSheet.create({
	container: {
		paddingTop: 23
	},
	input: {
		margin: 15,
		height: 40,
		borderColor: '#7a42f4',
		borderWidth: 1
	},
	submitButton: {
		backgroundColor: '#7a42f4',
		padding: 10,
		margin: 15,
		height: 40,
	},
	submitButtonText:{
		color: 'white'
	}
})