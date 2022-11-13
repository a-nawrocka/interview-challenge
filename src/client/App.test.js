import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

const testItems = {
	items: [
		{
			id: 1001,
			name: "Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens",
			dietaries: ["v", "ve", "df", "gf", "n!"],
		},
		{
			id: 1002,
			name: "Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots",
			dietaries: ["gf", "df", "rsf"],
		},
	],
};

// Example test
describe("Given valid API response", () => {
	it("renders correctly", () => {
		fetch.mockResponseOnce(JSON.stringify(testItems));

		render(<App />);

		expect(screen.getByText("0 items")).toBeInTheDocument();
	});
});
