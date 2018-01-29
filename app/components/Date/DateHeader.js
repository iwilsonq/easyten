import React from 'react';
import { View } from 'react-native';
import { formatDate } from '../../libs/helpers';
import { Header, Text, Divider } from './styles';

const DateHeader = props => (
	<View>
		<Header centered>Today</Header>
		<Text centered>{formatDate()}</Text>
		<Divider />
	</View>
);

export { DateHeader };
