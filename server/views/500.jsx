const React = require('react');
const Layout = require('./layouts/base');

class ServerErrorView extends React.Component {

	render () {

		return (
			<Layout>
				<h2>It's not you, it's me.</h2>
				<p>We're sorry but there was a problem on our end.</p>
			</Layout>
		);
	}
}

export default ServerErrorView;
