const React = require('react');

class BaseLayout extends React.Component {

	render () {

		return (
			<html>
				<head>
					<meta charset="utf-8" />
					<meta http-equiv="X-UA-Compatible" content="IE-Edge" />
					<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1" />
					<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat:300,500" />
					<link rel="stylesheet" type="text/css" href="/dist/css/bundle.css" />
					<title>Gaia</title>
				</head>
				<body>
					<div id="entry">
						{this.props.children}
					</div>
				</body>
			</html>
		);
	}
}

module.exports = BaseLayout;
