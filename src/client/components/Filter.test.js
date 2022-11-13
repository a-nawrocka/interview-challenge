import React from "react";
import renderer from "react-test-renderer";
import Filter from "./Filter";
import { shallow } from "enzyme";

describe("Given onFilter function", () => {
	it("display filter input box", () => {
		const component = renderer.create(<Filter onFilter={() => {}} />);

		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	describe("When filter is changed", () => {
		it("applies the filter", () => {
			const mockOnFilter = jest.fn();

			const filterComponent = shallow(<Filter onFilter={mockOnFilter} />);
			filterComponent.find("input").simulate("change", { target: { value: "Kale" } });

			expect(mockOnFilter.mock.calls.length).toBe(1);
			expect(mockOnFilter.mock.calls[0][0]).toBe("kale");
		});
	});
});
