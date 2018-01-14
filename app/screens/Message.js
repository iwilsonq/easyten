import React from 'react';
import { View, Text, Button } from 'react-native';

const MessageScreen = ({ navigation }) => (
	<View>
		<Text>Message Screen</Text>
		<Button
			onPress={() => navigation.navigate('Home')}
			title="Go to home"
		/>
	</View>
);

export default MessageScreen;
