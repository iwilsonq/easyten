import React from 'react';
import renderer from 'react-test-renderer';
import RootNavigator, { routeConfigMap } from '../routes';

describe('RootNavigator', () => {
	const rootNavigator = renderer.create(<RootNavigator />).toJSON();

	it('renders', () => {
		expect(rootNavigator).toMatchSnapshot();
	});

	it('has a tab for each entry in `routeConfigMap`', () => {
		const tabs = rootNavigator.children;
		const entries = Object.keys(routeConfigMap).length;
		expect(tabs.length).toBe(entries);
	});
});
