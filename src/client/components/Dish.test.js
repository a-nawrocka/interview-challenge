import React from "react";
import renderer from "react-test-renderer";
import Dish from "./Dish";
import { shallow } from "enzyme";

describe("Given valid dish object and onSelected function", () => {
	it("display dish information without remove button", () => {
		const expectedDish = {
			id: 1,
			name: "tasty dish",
			dietaries: ["v", "ve", "df"],
		};

		const component = renderer.create(<Dish dish={expectedDish} onSelected={() => {}} />);

		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	describe("When dish is selected", () => {
		it("adds dish", () => {
			const expectedDish = {
				id: 1,
				name: "tasty dish",
				dietaries: ["v", "ve", "df"],
			};
			const mockOnSelected = jest.fn();

			const dishComponent = shallow(<Dish dish={expectedDish} onSelected={mockOnSelected} />);
			dishComponent.find("li").simulate("click");

			expect(mockOnSelected.mock.calls.length).toBe(1);
			expect(mockOnSelected.mock.calls[0][0]).toBe(expectedDish);
		});
	});
});

describe("Given valid dish object and onRemoved function", () => {
	it("display dish information with remove button", () => {
		const expectedDish = {
			id: 1,
			name: "tasty dish",
			dietaries: ["v", "ve", "df"],
		};

		const component = renderer.create(<Dish dish={expectedDish} onRemoved={() => {}} />);

		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	describe("When dish is removed", () => {
		it("removes dish", () => {
			const expectedDish = {
				id: 1,
				name: "tasty dish",
				dietaries: ["v", "ve", "df"],
			};
			const mockOnRemoved = jest.fn();

			const dishComponent = shallow(<Dish dish={expectedDish} onRemoved={mockOnRemoved} />);
			dishComponent.find("button").simulate("click");

			expect(mockOnRemoved.mock.calls.length).toBe(1);
			expect(mockOnRemoved.mock.calls[0][0]).toBe(expectedDish);
		});
	});
});
