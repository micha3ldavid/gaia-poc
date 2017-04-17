
import React from 'react';
import SiteNav from './nav';

class NavMobile extends React.Component {

	constructor (props) {

		super(props);

		this.state = {
			isOpen: false,
			btnClass: 'hamburger',
			onClick: this.onClick.bind(this)
		};
	}

	onClick (e) {

		e.preventDefault();

		const isOpen = !this.state.isOpen;
		const btnClass = isOpen && ' active' || '';

		this.setState({
			isOpen: isOpen,
			btnClass: 'hamburger' + btnClass
		});
	}

	render () {

		return (
			<div className="navbar-mobile">
				<button onClick={this.state.onClick} className={this.state.btnClass}>
					<span className="sr-only">Open Mobile Navigation</span>
				</button>
				<div className="navbar-mobile-nav" aria-hidden={!this.state.isOpen}>
					<SiteNav />
				</div>
			</div>
		);
	}
}

export default NavMobile;
