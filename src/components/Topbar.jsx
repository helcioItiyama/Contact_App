import React from 'react';
import { ReactComponent as LogoSvg } from "../assets/img/logo.svg";
import './TopBar.scss';


class Topbar extends React.Component {
	render() {
		return (
		<div className="topbar">
			<div className="container">
				<a href="/" className="topbar__logo">
					<LogoSvg alt="Logo Instagram" />
				</a>
			</div>
		</div>
		);
	}
}

export default Topbar;
