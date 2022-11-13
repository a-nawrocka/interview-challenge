import React from 'react'
import renderer from 'react-test-renderer';
import DishList from "./DishList";

describe('Given valid array of dish objects', () => {
    it('displays list of dishes', () => {
		const expectedDishes = [
			{
				id: 1,
				name: 'dish one',
				dietaries: ['v', 've', 'df'],
			},
			{
				id: 2,
				name: 'dish two',
				dietaries: ['rsf', 'n!'],
			}
		];

		const component = renderer.create(
			<DishList dishes={expectedDishes} />
		);

		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
    })
})