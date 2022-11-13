import React from "react";

class Dish extends React.Component {
	onSelected = () => {
		this.props.onSelected(this.props.dish);
	};

	onRemoved = () => {
		this.props.onRemoved(this.props.dish);
	};

	render() {
		let dishComponent;

		if (this.props.onSelected) {
			dishComponent = (
				<li className="item" onClick={this.onSelected}>
					<h2>{this.props.dish.name}</h2>
					<p>
						{this.props.dish.dietaries.map((dietary, index) => (
							<span key={index} className="dietary">
								{dietary}
							</span>
						))}
					</p>
				</li>
			);
		} else if (this.props.onRemoved) {
			dishComponent = (
				<li className="item">
					<h2>{this.props.dish.name}</h2>
					<p>
						{this.props.dish.dietaries.map((dietary, index) => (
							<span key={index} className="dietary">
								{dietary}
							</span>
						))}
					</p>
					<button className="remove-item" onClick={this.onRemoved}>
						x
					</button>
				</li>
			);
		}

		return dishComponent;
	}
}

export default Dish;
