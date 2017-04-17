const React = require('react');
const Layout = require('./layouts/base');

class NotFoundView extends React.Component {

	render () {

		return (
			<Layout>
				<h2>It's not me, it's you.</h2>
				<p>The page you are looking for does not exist.</p>
			</Layout>
		);
	}
}

module.exports = NotFoundView;
