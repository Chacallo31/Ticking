import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

class Schools extends Component {
	state = {
		names: ''
	}
	
	alertItemName = (item) => {
		alert(item.nom)
	}
	//Cette fonction sera remplacée par une fonction de navigation
	
	componentDidMount = () => {
		//Cette méthode doit nous rendre un json d'éléments id et nom de l'école
		fetch('https://touten5.net/traiteconnexion.php', {
			method: 'GET'
		})
		.then((response) => response.json())
		.then((responseJson) => {
			console.log(responseJson);
			this.setState({
				names: responseJson
			})
		})
		.catch((error) => {
			console.error(error);
		});
	}
	
	render() {
		return(
			<View>
				<ScrollView>
					{
						this.state.names.map((item, index) ⇒ (
							<TouchableOpacity key = {item.id} style = {styles.item} onPress = {() => this.alertItemName(item)}>
								<Text>{item.nom}</Text>
							</TouchableOpacity>
						))
					}
				</ScrollView>
			</View>
		)
	}
}

export default Schools

const styles = StyleSheet.create ({
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 30,
		margin: 2,
		borderColor: '#2a4944',
		borderWidth: 1,
		backgroundColor: '#d2f7f1'
	}
})