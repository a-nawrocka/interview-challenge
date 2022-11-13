import React from "react";
import Dish from "./Dish";

const DishList = (props) => {
	return (
		<ul className="item-picker">
			{props.dishes.map((dish) => (
				<Dish key={dish.id} dish={dish} onSelected={props.onDishSelected} />
			))}
		</ul>
	);
};

export default DishList;
