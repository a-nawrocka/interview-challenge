import React from "react";
import Dish from "./Dish";

const DishList = props => {
	return (
		<ul className="item-picker">
			{props.dishes.map(dish => (
				<Dish key={dish.id} dish={dish} />
			))}	
		</ul>
	);
};

export default DishList;