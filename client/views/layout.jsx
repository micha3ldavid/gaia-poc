
import React from 'react';
import SiteHeader from '../components/shared/headers/site-header';

export default class Layout extends React.Component {

	render () {

		return (
			<div id="main">
				<SiteHeader />
				{this.props.children}
			</div>
		);
	}
}
