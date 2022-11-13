const cors = require("cors");
const express = require("express");
const items = require("./items");

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.static("dist"));

app.get("/api/items", (req, res) => {
	const term = req.query.term || "";
	const filteredItems = items.filter((item) => {
		if (term === "") {
			return item;
		} else {
			return item.name.toLowerCase().includes(term);
		}
	});

	res.send({ items: filteredItems });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
