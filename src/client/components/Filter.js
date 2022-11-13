import React from "react";

class Filter extends React.Component {
	onFilter = (term) =>  {
		this.props.onFilter(term);		
	};

	render() {
		return (
			<div className="filters">
              <input className="form-control" placeholder="Name" onChange={ e =>this.onFilter(e.target.value.toLowerCase())} />
            </div>
		);
	};
}

export default Filter;