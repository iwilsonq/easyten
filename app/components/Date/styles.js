import React from 'react';
import g from 'glamorous-native';
import { theme, typography } from '../../config/theme';

const Header = g.text(
	{
		...typography.header
	},
	({ styles, ...props }) => ({
		textAlign: props.centered ? 'center' : 'left',
		...styles
	})
);

const Text = g.text(
	{
		...typography.body
	},
	({ styles, ...props }) => ({
		textAlign: props.centered ? 'center' : 'left',
		...styles
	})
);

const DividerWrapper = g.view({
	width: '100%',
	flex: 1,
	alignItems: 'center'
});

const DividerDash = g.view({
	width: 120,
	height: 1,
	backgroundColor: theme.grey,
	marginVertical: 20
});

const Divider = () => (
	<DividerWrapper>
		<DividerDash />
	</DividerWrapper>
);

export { Header, Text, Divider };
