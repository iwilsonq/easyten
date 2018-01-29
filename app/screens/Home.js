import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import config from '../config';

import { Overview } from '../components/Overview';
import { WorkoutCard } from '../components/Card';
import { NoWorkoutsCompleted } from '../components/Motivation';

class HomeScreen extends Component {
	state = {
		workouts: []
	};

	componentDidMount() {
		// axios
		// 	.get('http://localhost:8080/workouts')
		// 	.then(res => res.data)
		// 	.then(workouts => this.setState({ workouts }))
		// 	.catch(err => console.error(err));
	}

	renderPastWorkouts() {
		const { workouts } = this.state;
		return workouts.length ? (
			workouts.map(workout => <WorkoutCard key={workout.id} />)
		) : (
			<NoWorkoutsCompleted />
		);
	}

	render() {
		const { navigation } = this.props;
		const centerCoordinate = [-122.4324, 37.78825];
		return (
			<View>
				<Overview
					header="Home Screen"
					subHeader={`Workouts completed: ${
						this.state.workouts.length
					}`}
				/>
				{this.renderPastWorkouts()}
			</View>
		);
	}
}

export default HomeScreen;
