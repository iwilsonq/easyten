import React from 'react';
import { View, Text, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from './theme';
import HomeScreen from '../screens/Home';
import RunScreen from '../screens/Run';
import MessageScreen from '../screens/Message';

export const routeConfigMap = {
	Home: {
		screen: HomeScreen,
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
		screen: RunScreen,
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
		screen: MessageScreen,
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
