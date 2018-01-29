import React from 'react';
import { View } from 'react-native';
import { formatWorkoutDate } from '../../libs/helpers';
import { BodyText } from '../Text';

const WorkoutDate = ({ created }) => (
	<View>
		<BodyText>{formatWorkoutDate(created)}</BodyText>
	</View>
);

export { WorkoutDate };
