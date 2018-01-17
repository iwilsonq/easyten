import React from 'react';
import { View, Text } from 'react-native';
import { Font } from 'expo';
import RootNavigator from './app/config/routes';

export default class App extends React.Component {
	state = {
		appLoading: true
	};

	async componentDidMount() {
		await Font.loadAsync({
			'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
			'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf')
		});

		this.setState({ appLoading: false });
	}

	render() {
		if (this.state.appLoading) {
			return (
				<View>
					<Text>App is Loading...</Text>
				</View>
			);
		}
		return <RootNavigator />;
	}
}
