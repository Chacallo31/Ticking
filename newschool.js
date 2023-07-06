import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native'

class NewSchool extends Component {
	state = {
		nom: '',
		slogan: '',
		email: '',
		password: '',
	}
	
	handleNom = (text) => {
		this.setState({ nom: text })
	}
	
	handleSlogan = (text) => {
		this.setState({ slogan: text })
	}
	
	handleEmail = (text) => {
		this.setState({ email: text })
	}
	
	handlePassword = (text) => {
		this.setState({ password: text })
	}
	
	saveSchool = (nomm, slog, email, pass) => {
		alert('Tout est bon: ' + email + ' et ' + pass)
		//On met la méthode fetch en post pour connexion
		const params = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				account: nomm,
				title: slog,
				username: email,
				password: pass,
			})
		};
		fetch('http://touten5.net/traiteconnexion.php', params)
			.then(response => response.json())
			.then(data => console.log(data));
			//A ce then il faut une fonction qui renseigne si l'école a bien été enregistrée
	}
	
	render(){
		return(
			<View style = {styles.container}>
				<TextInput style = {styles.input}
					underlineColorAndroid = "transparent"
					placeholder = "Nom de l'école"
					placeholderTextColor = "#9a73ef"
					autoCapitalize = "none"
					onChangeText = {this.handleNom}/>
				<TextInput style = {styles.input}
					underlineColorAndroid = "transparent"
					placeholder = "Slogan de l'école"
					placeholderTextColor = "#9a73ef"
					autoCapitalize = "none"
					onChangeText = {this.handleSlogan}/>
				<TextInput style = {styles.input}
					underlineColorAndroid = "transparent"
					placeholder = "Téléphone (Identifiant)"
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
					() => this.saveSchool(this.state.nom, this.state.slogan, this.state.email, this.state.password)
					}>
					<Text style = {styles.submitButtonText}> Enregistrer </Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default NewSchool

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