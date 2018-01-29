import React from 'react';
import { Image, View } from 'react-native';

const ImageWrapper = ({
	uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png',
	flex
}) => {
	return (
		<View style={{ flex, justifyContent: 'center' }}>
			<Image style={{ width: 56, height: 56 }} source={{ uri }} />
		</View>
	);
};

export { ImageWrapper };
