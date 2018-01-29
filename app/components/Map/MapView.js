import React from 'react';
import { MapView } from 'expo';
import { Text, View } from 'react-native';
import { MapWrapper } from './styles';

const Circle = MapView.Circle;

const marker = {
	title: 'landmark',
	description: 'how neat is that',
	latlng: {
		latitude: 37.32352504855892,
		longitude: -121.9945214390405
	}
};

const Map = props => {
	return (
		<MapWrapper>
			<MapView
				style={{ flex: 3, alignSelf: 'stretch' }}
				initialRegion={{
					latitude: 37.32352504855892,
					longitude: -121.9945214390405,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
			>
				<Circle center={marker.latlng} radius={300} />
			</MapView>
			<View style={{ flex: 2, backgroundColor: '#fff' }}>
				<Text>Some text!</Text>
			</View>
		</MapWrapper>
	);
};

export { Map };
