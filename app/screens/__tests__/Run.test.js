import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import RunScreen from '../Run';

describe('Run Screen', () => {
	const wrapper = renderer.create(<RunScreen />).toJSON();
	it('renders', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
