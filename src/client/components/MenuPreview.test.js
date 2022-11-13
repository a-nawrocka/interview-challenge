import React from "react";
import renderer from "react-test-renderer";
import MenuPreview from "./MenuPreview";

describe("Given valid array of selected dish objects", () => {
	it("displays list of selected dishes", () => {
		const expectedDishes = [
			{
				id: 1,
				name: "dish one",
				dietaries: ["v", "ve", "df"],
			},
			{
				id: 2,
				name: "dish two",
				dietaries: ["rsf", "n!"],
			},
		];

		const component = renderer.create(<MenuPreview selectedDishes={expectedDishes} onDishRemoved={() => {}} />);

		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
