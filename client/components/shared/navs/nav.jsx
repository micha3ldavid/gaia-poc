
import React from 'react';

const SiteNav = (props) => {

	return (
		<ul className="nav">
			<li className="nav-item">
				<a className="nav-link" href="#">My Gaia</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">Yoga</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">Transformation</a>
			</li>
			<li className="nav-item">
				<a className="nav-link active" href="#">Seeking Truth</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">Films &amp; Docs</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">Centers</a>
			</li>
		</ul>
	);
};

export default SiteNav;
