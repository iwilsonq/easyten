import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme, safearea } from './theme';
import HomeScreen from '../screens/Home';
import RunScreen from '../screens/Run';
import MessageScreen from '../screens/Message';

function layout(Screen) {
	return class extends Component {
		render() {
			return (
				<SafeAreaView style={safearea}>
					<StatusBar
						backgroundColor="blue"
						barStyle="light-content"
					/>
					<Screen {...this.props} />
				</SafeAreaView>
			);
		}
	};
}

export const routeConfigMap = {
	Home: {
		screen: layout(HomeScreen),
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor, focused }) => (
				<MaterialCommunityIcons
					name="home"
					size={26}
					style={{ color: tintColor }}
				/>
			)
		}
	},
	Run: {
		screen: layout(RunScreen),
		navigationOptions: {
			tabBarLabel: 'Run',
			tabBarIcon: ({ tintColor, focused }) => (
				<MaterialCommunityIcons
					name="run"
					size={26}
					style={{ color: tintColor }}
				/>
			)
		}
	},
	Message: {
		screen: layout(MessageScreen),
		navigationOptions: {
			tabBarLabel: 'Messages',
			tabBarIcon: ({ tintColor, focused }) => (
				<MaterialCommunityIcons
					name="email"
					size={26}
					style={{ color: tintColor }}
				/>
			)
		}
	}
};

const tabNavigatorConfig = {
	tabBarOptions: {
		activeTintColor: theme.white,
		activeBackgroundColor: theme.secondary[1],
		inactiveTintColor: theme.grey,
		labelStyle: {
			fontSize: 12
		},
		style: {
			backgroundColor: theme.primary
		}
	}
};

const RootNavigator = TabNavigator(routeConfigMap, tabNavigatorConfig);

export default RootNavigator;
