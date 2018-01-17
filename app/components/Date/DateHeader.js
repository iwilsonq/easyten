import React from 'react';
import { View } from 'react-native';
import { Header, Text, Divider } from './styles';

const DateHeader = props => (
	<View>
		<Header centered>Today</Header>
		<Text centered>Tuesday, January 15, 2018</Text>
		<Divider />
	</View>
);

export { DateHeader };
