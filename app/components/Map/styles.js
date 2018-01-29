import { Dimensions } from 'react-native';
import g from 'glamorous-native';

const { width } = Dimensions.get('window');

const MapWrapper = g.view({
	flex: 2,
	width
});

export { MapWrapper };
