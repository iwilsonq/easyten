import React from 'react';
import { SafeAreaView } from 'react-native';
import theme from './app/config/theme';
import RootNavigator from './app/config/routes';

const styles = {
	flex: 1,
	backgroundColor: theme.primary
};

export default class App extends React.Component {
	render() {
		return (
			// <SafeAreaView styles={styles}>
			<RootNavigator />
			// </SafeAreaView>
		);
	}
}
