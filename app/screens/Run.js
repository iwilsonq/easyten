import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import config from '../config';

import { Map } from '../components/Map';

class RunScreen extends Component {
	componentDidMount() {
		// axios
		// 	.get('http://localhost:8080/workouts')
		// 	.then(res => res.data)
		// 	.then(workouts => this.setState({ workouts }))
		// 	.catch(err => console.error(err));
	}

	render() {
		const { navigation } = this.props;
		return (
			<View>
				<Map />
			</View>
		);
	}
}

export default RunScreen;
