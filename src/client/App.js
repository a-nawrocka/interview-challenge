import React from "react";
import "./App.css";
import Feedr from "./services/Feedr";
import DishList from "./components/DishList";
import MenuPreview from "./components/MenuPreview";

class App extends React.Component {
	state = {
		dishes: [],
		selectedDishes: [],
	};

	async componentDidMount() {
		const items = await Feedr.getDishes("");
		this.setState({ dishes: items });
	}

	onDishSelected = (dish) => {
		this.setState({
			selectedDishes: [...this.state.selectedDishes, dish],
		});
	};

	onDishRemoved = (dish) => {
		const indexToRemove = this.state.selectedDishes.indexOf(dish);
		if (indexToRemove === -1) {
			return;
		}

		this.setState({
			selectedDishes: [...this.state.selectedDishes.slice(0, indexToRemove), ...this.state.selectedDishes.slice(indexToRemove + 1)],
		});
	};

	render() {
		return (
			<div className="wrapper">
				<div className="menu-summary">
					<div className="container">
						<div className="row">
							<div className="col-6 menu-summary-left">
								<span>6 items</span>
							</div>
							<div className="col-6 menu-summary-right">
								6x <span className="dietary">ve</span>
								4x <span className="dietary">v</span>
								12x <span className="dietary">n!</span>
							</div>
						</div>
					</div>
				</div>
				<div className="container menu-builder">
					<div className="row">
						<div className="col-4">
							<div className="filters">
								<input className="form-control" placeholder="Name" />
							</div>
							<DishList dishes={this.state.dishes} onDishSelected={this.onDishSelected} />
						</div>
						<MenuPreview selectedDishes={this.state.selectedDishes} onDishRemoved={this.onDishRemoved} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
