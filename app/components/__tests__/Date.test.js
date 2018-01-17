import React from 'react';
import renderer from 'react-test-renderer';
import { DateHeader } from '../Date';

describe('DateHeader', () => {
	const componentJSON = renderer.create(<DateHeader />).toJSON();

	it('renders properly', () => {
		expect(componentJSON).toMatchSnapshot();
	});
});
