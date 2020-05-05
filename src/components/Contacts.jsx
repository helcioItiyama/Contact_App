import React from "react";
import './Contacts.scss';

class Contacts extends React.Component {
	render() {
		const children = this.props.children;
		return (
		<div className="contacts">{children}</div>
		);
	}
}

export default Contacts;
