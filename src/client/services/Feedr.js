class Feedr {
	constructor() {}

	getDishes = async function (term = "") {
		const response = await fetch(
			"http://localhost:8080/api/items?" +
				new URLSearchParams({
					term: term,
				})
		);
		const data = await response.json();

		return data.items;
	};
}

export default new Feedr();
