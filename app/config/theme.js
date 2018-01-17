const theme = {
	primary: '#2b2b30',
	secondary: ['#cf3a5e', '#eb456b'],
	tertiary: '#f8937c',
	white: '#dededf',
	grey: '#9e9ea0',
	fontSizes: {
		sm: 14,
		md: 16,
		lg: 18
	}
};

const typography = {
	header: {
		fontFamily: 'montserrat-semibold',
		fontSize: theme.fontSizes.lg,
		color: theme.white,
		fontWeight: '600',
		paddingBottom: 8
	},
	body: {
		fontFamily: 'montserrat-regular',
		fontSize: theme.fontSizes.sm,
		color: theme.white
	}
};

const safearea = {
	flex: 1,
	backgroundColor: theme.primary
};

export { theme, safearea, typography };
export default theme;
