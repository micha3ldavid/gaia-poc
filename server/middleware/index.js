
const jsx = require('express-react-views');

module.exports = (app, express) => {

	app.engine('jsx', jsx.createEngine());

	app.set('views', './server/views');
	app.set('view engine', 'jsx');
};
