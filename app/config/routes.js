import React from 'react';
import { View, Text, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => (
	<View>
		<Text>Home Screen</Text>
		<Button
			onPress={() => navigation.navigate('Details')}
			title="Go to details"
		/>
	</View>
);

const DetailsScreen = ({ navigation }) => (
	<View>
		<Text>Details Screen</Text>
		<Button
			onPress={() => navigation.navigate('Home')}
			title="Go to home"
		/>
	</View>
);

const RootNavigator = TabNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor, focused }) => (
				<Ionicons
					name={focused ? 'ios-home' : 'ios-home-outline'}
					size={26}
					style={{ color: tintColor }}
				/>
			)
		}
	},
	Details: {
		screen: DetailsScreen,
		navigationOptions: {
			tabBarLabel: 'Details',
			tabBarIcon: ({ tintColor, focused }) => (
				<Ionicons
					name={focused ? 'ios-person' : 'ios-person-outline'}
					size={26}
					style={{ color: tintColor }}
				/>
			)
		}
	}
});

export default RootNavigator;
