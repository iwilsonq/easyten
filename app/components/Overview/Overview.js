import React from 'react';
import { View } from 'react-native';
import { HeaderText, BodyText } from '../Text';

const Overview = ({ header, subHeader }) => {
	return (
		<View style={{ margin: 12, alignItems: 'center' }}>
			<HeaderText>{header}</HeaderText>
			<BodyText>{subHeader}</BodyText>
		</View>
	);
};

export { Overview };
