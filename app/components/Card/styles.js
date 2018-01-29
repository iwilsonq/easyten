import g from 'glamorous-native';
import { theme, typography } from '../../config/theme';

const CardWrapper = g.view(
	{
		backgroundColor: theme.cardBg,
		borderRadius: 4,
		padding: 12,
		margin: 10
	},
	({ style }) => ({ ...style })
);

const CardTitle = g.text({
	...typography.header
});

const CardBody = g.text({
	...typography.body
});

const WorkoutDetails = g.view(
	{
		marginHorizontal: 12,
		height: 66
	},
	({ flex }) => ({ flex })
);

const ActionWrapper = g.view(
	{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	({ flex }) => ({ flex })
);

export { CardTitle, CardBody, CardWrapper, WorkoutDetails, ActionWrapper };
