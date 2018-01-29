import React from 'react';
import { MotivationWrapper, MotivationText } from './styles';
import { HeaderText } from '../Text';
import { getRandomMotivation } from '../../libs/motivation';

const NoWorkoutsCompleted = props => {
	return (
		<MotivationWrapper>
			<HeaderText>You have no workouts completed</HeaderText>
			<MotivationText>{getRandomMotivation()}</MotivationText>
		</MotivationWrapper>
	);
};

export { NoWorkoutsCompleted };
