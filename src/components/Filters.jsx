import React from 'react';
import './Filters.scss';

class Filters extends React.Component {
	render() {
		const children = this.props.children;
		return (
			<div className="filters">
				{children}
			</div>
		);
	}
}

export default Filters;
