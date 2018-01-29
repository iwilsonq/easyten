import React from 'react';
import g from 'glamorous-native';
import { typography } from '../../config/theme';

const HeaderText = g.text(
	{
		...typography.header,
	},
	({ styles }) => ({ ...styles })
);

const BodyText = g.text(
	{
		...typography.body,
	},
	({ styles }) => ({ ...styles })
);

export { HeaderText, BodyText };
