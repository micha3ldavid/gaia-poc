const React = require('react');
const Layout = require('./layouts/base');

class EntrypointView extends React.Component {

	render () {

		return (
			<Layout>
				<script type="text/javascript" src="/dist/js/bundle.js" />
			</Layout>
		);
	}
}

module.exports = EntrypointView;
