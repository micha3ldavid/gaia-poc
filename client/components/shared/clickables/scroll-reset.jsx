
import React from 'react';

class ScrollReset extends React.Component {

	constructor (props) {

		super(props);

		this.state = {
			onScroll: this.onScroll.bind(this),
			onClick: this.onClick.bind(this)
		};
	}

	onScroll (e) {

		console.info('scrolling');
	}

	onClick (e) {

		e.preventDefault();
		this.resetWindowScroll();
	}

	resetWindowScroll () {

		let intervalId = null;;

		intervalId = window.setInterval(() => {

			if (window.pageYOffset) {
				window.scrollBy(0, -20);
				return;
			}

			clearInterval(intervalId);
			intervalId = null;

		}, 1);
	}

	render () {

		return (
			<button
				className="btn pull-right"
				aria-hidden="true"
				onScroll={this.state.onScroll}
				onClick={this.state.onClick}>
					<span className="icon icon-angle-up"></span>
			</button>
		);
	}
}

export default ScrollReset;
