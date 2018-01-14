import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import HomeScreen from '../Home';

describe('Home Screen', () => {
	const wrapper = renderer.create(<HomeScreen />).toJSON();
	it('renders', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
