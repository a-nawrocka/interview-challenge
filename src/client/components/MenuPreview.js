import React from "react";
import Dish from "./Dish";

const MenuPreview = (props) => {
	return (
		<div className="col-8">
			<h2>Menu preview</h2>
			<ul className="menu-preview">
				{props.selectedDishes.map((dish, index) => (
					<Dish key={index} dish={dish} onRemoved={props.onDishRemoved} />
				))}
			</ul>
		</div>
	);
};

export default MenuPreview;
