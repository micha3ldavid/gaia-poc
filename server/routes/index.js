
module.exports = (app, express) => {

	app.use('/dist', express.static('dist'));

	// our only page, index

	app.get('/', function (req, res) {
		res.render('entry');
	});

	// this fella is only here because using the gaia cdn banner images
	// as inline-style background-image urls forces Chrome to make a localhost
	// call to /undefined and I don't know why!

	app.get('/undefined', function (req, res) {
		res.end();
	});

	// typical error pages

	app.use(function (req, res) {
		res.status(404).render('404');
	});

	app.use(function (req, res) {
		res.status(500).render('500');
	});
};
