
import React from 'react';
import SiteNav from '../navs/nav';
import MobileNav from '../navs/nav-mobile';
import SearchForm from '../form-controls/search';

class SiteHeader extends React.Component {

	constructor (props) {

		super(props);

		this.state = {
			query: props.query || '',
			onSearchFormSubmit: this.onSearchFormSubmit.bind(this)
		};
	}

	onSearchFormSubmit (query) {

		this.setState({query: query}, () => {
			alert('dispatch search for ' + query);
		});
	}

	render () {

		return (
			<header className="navbar">
				<div className="navbar-header">
					<MobileNav />
					<h1 className="navbar-title">
						<a className="navbar-logo" href="/" title="Gaia Homepage">
							<span className="sr-only">Gaia</span>
							<img src="/dist/images/logo.svg" alt="Gaia Logo" aria-hidden="true" />
						</a>
					</h1>
					<aside className="navbar-actions">
						<a className="icon-lg" href="#" title="View profile for David">
							<span className="icon-label">David</span>
							<span className="icon icon-user-circle" role="presentation"></span>
						</a>
					</aside>
				</div>
				<div className="navbar-footer">
					<nav className="navbar-nav">
						<SiteNav />
					</nav>
					<div className="navbar-search">
						<SearchForm
							query={this.state.query}
							onSubmit={this.state.onSearchFormSubmit} />
					</div>
				</div>
			</header>
		);
	}
}

export default SiteHeader;
