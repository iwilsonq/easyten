import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
	<View>
		<Text>Home Screen</Text>
		<Button onPress={() => navigation.navigate('Run')} title="Go to run" />
	</View>
);

export default HomeScreen;
