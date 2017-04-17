
require('babel-register');

const express = require('express');
const app = express();

const initMiddleware = require('./middleware');
const initRoutes = require('./routes');

initMiddleware(app, express);
initRoutes(app, express);

app.listen(8080, function () {
  console.log('Gaia started on port 8080');
});
