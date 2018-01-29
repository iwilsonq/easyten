import g from 'glamorous-native';

import theme from '../../config/theme';

const MotivationWrapper = g.view({
	alignItems: 'center',
	paddingVertical: 12
});

const MotivationText = g.text({
	paddingVertical: 24,
	color: theme.trueWhite,
	fontSize: 32,
	fontWeight: 'bold',
	fontFamily: 'bangers',
	backgroundColor: 'transparent'
});

export { MotivationWrapper, MotivationText };
