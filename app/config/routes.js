import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const HomeScreen = ({ navigation }) => (
	<View>
		<Text>Home Screen</Text>
		<Button onPress={() => navigation.navigate('Details')} title="Go to details" />
	</View>
);

const DetailsScreen = ({ navigation }) => (
	<View>
		<Text>Details Screen</Text>
		<Button onPress={() => navigation.navigate('Home')} title="Go to home" />
	</View>
);

const RootNavigator = StackNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			headerTitle: 'Home'
		}
	},
	Details: {
		screen: DetailsScreen,
		navigationOptions: {
			headerTitle: 'Details'
		}
	}
});

export default RootNavigator;
