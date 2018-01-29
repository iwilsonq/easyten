import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from '../Card';

describe('Card', () => {
	const props = {};
	const wrapper = renderer.create(<Card {...props} />).toJSON();

	it('renders properly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
