import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';

import { theme, safearea } from './theme';
import HomeScreen from '../screens/Home';
import RunScreen from '../screens/Run';
import MessageScreen from '../screens/Message';

function layout(Screen) {
	return class extends Component {
		render() {
			return (
				<SafeAreaView style={safearea}>
					<LinearGradient
						colors={['#282a2f', '#423135', '#282a2f']}
						style={{
							height: '100%',
							width: '100%',
							padding: 15,
							alignItems: 'center',
							borderRadius: 5
						}}
					>
						<StatusBar
							backgroundColor="blue"
							barStyle="light-content"
						/>
						<Screen {...this.props} />
					</LinearGradient>
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
