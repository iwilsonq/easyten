import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../config/theme';

import { ImageWrapper } from '../Image';
import { BodyText, HeaderText } from '../Text';
import { WorkoutDate } from '../Date';
import { InlineStats } from '../Stats';
import {
	CardWrapper,
	CardTitle,
	CardBody,
	WorkoutDetails,
	ActionWrapper
} from './styles';

const Card = ({ title = '1:21:13', body = 'Active Time' }) => {
	return (
		<CardWrapper>
			<CardTitle>{title}</CardTitle>
			<CardBody>{body}</CardBody>
		</CardWrapper>
	);
};

const CardAction = ({ flex }) => {
	return (
		<ActionWrapper style={{ flex }}>
			<MaterialCommunityIcons
				name="chevron-right"
				size={26}
				style={{ color: theme.white }}
			/>
		</ActionWrapper>
	);
};

const WorkoutCard = ({
	title = 'A Title',
	distance = '9.86',
	pace = `7'02"`,
	duration = '01:20:55',
	created = Date.now()
}) => {
	return (
		<CardWrapper style={{ flexDirection: 'row' }}>
			<ImageWrapper flex={2} />
			<WorkoutDetails flex={6}>
				<WorkoutDate created={created} />
				<HeaderText>{title}</HeaderText>
				<InlineStats
					duration={duration}
					distance={distance}
					pace={pace}
				/>
			</WorkoutDetails>
			<CardAction flex={1} />
		</CardWrapper>
	);
};

export { Card, WorkoutCard };
