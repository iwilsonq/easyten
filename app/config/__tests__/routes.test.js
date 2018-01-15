import React from 'react';
import renderer from 'react-test-renderer';
import RootNavigator, { routeConfigMap } from '../routes';

describe('RootNavigator', () => {
	const rootNavigator = renderer.create(<RootNavigator />).toJSON();

	it('renders', () => {
		expect(rootNavigator).toMatchSnapshot();
	});
});
