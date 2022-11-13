import React from 'react'
import renderer from 'react-test-renderer';
import Dish from "./Dish";

describe('Given valid dish object', () => {
	it('display dish information', () => {
		const expectedDish = {
			id: 1,
			name: 'tasty dish',
			dietaries: ['v', 've', 'df'],
		};

		const component = renderer.create(
			<Dish dish={expectedDish} />
		);

		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	})
})