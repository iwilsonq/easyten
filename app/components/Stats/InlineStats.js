import React from 'react';
import { BodyText } from '../Text';
import { InlineTextWrapper } from './styles';

const InlineStats = ({ distance, pace, duration }) => {
	return (
		<InlineTextWrapper>
			<BodyText>{distance} mi</BodyText>
			<BodyText>{pace}/mi</BodyText>
			<BodyText>{duration}</BodyText>
		</InlineTextWrapper>
	);
};

export { InlineStats };
