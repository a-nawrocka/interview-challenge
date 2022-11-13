import React from "react";

class Dish extends React.Component {
	render() {
		return (
			<li className="item">
				<h2>{this.props.dish.name}</h2>
				<p>
					{this.props.dish.dietaries.map((dietary, index) => (
						<span key={index} className="dietary">{dietary}</span>
					))}				
				</p>
			</li>
		);
	};
};	

export default Dish;