const theme = {
	primary: '#2b2b30',
	secondary: ['#cf3a5e', '#eb456b'],
	tertiary: '#f8937c',
	white: '#dededf',
	trueWhite: '#fff',
	grey: '#9e9ea0',
	cardBg: '#32343a',
	fontSizes: {
		sm: 16,
		md: 18,
		lg: 21
	}
};

const typography = {
	header: {
		fontFamily: 'montserrat-semibold',
		fontSize: theme.fontSizes.lg,
		color: theme.trueWhite,
		fontWeight: '600',
		paddingBottom: 8,
		backgroundColor: 'transparent'
	},
	body: {
		fontFamily: 'montserrat-regular',
		fontSize: theme.fontSizes.sm,
		color: theme.white,
		backgroundColor: 'transparent'
	}
};

const safearea = {
	flex: 1,
	backgroundColor: theme.primary
};

export { theme, safearea, typography };
export default theme;
