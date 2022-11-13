import React from "react";

class MenuSummary extends React.Component {
 
	render() {   
    let dietaries = {};

    this.props.selectedDishes.forEach(dish => {
      dish.dietaries.forEach(dietary => {
        dietaries[dietary] = (dietaries[dietary] ?? 0) + 1;
      });
    });

    let dietariesLabels = [];

    Object.entries(dietaries).map((entry,index) => {
      dietariesLabels.push(`${entry[1]}x `)
      dietariesLabels.push(<span key={index} className="dietary">{entry[0]}</span>)
    });

    return  (
      <div className="menu-summary">
          <div className="container">
            <div className="row">
              <div className="col-6 menu-summary-left">
                <span>{this.props.selectedDishes.length} {this.props.selectedDishes.length === 1 ? 'item' : 'items'}</span>
              </div>
              <div className="col-6 menu-summary-right">
                {dietariesLabels}
              </div>
            </div>
          </div>
      </div>
	  );
  };
};

export default MenuSummary;