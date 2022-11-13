import React from "react";
import renderer from "react-test-renderer";
import MenuSummary from "./MenuSummary";

describe("Given valid array of selected dish objects", () => {
	it("displays summary of selected dishes", () => {
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

		const component = renderer.create(<MenuSummary selectedDishes={expectedDishes} />);

		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
