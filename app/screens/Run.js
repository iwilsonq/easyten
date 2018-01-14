import React from 'react';
import { View, Text, Button } from 'react-native';

const RunScreen = ({ navigation }) => (
	<View>
		<Text>Run Screen</Text>
		<Button
			onPress={() => navigation.navigate('Home')}
			title="Go to home"
		/>
	</View>
);

export default RunScreen;
