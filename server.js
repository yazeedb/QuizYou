var express = require('express'),
	app = express(),
	config = require('./config.js'),
	mongoose = require('mongoose');

mongoose.connect(config.db);

app.use(express.static(__dirname + '/public'));
app.locals.pretty = true;

var	appRoutes = require('./app/routes/appRouter.js')(app, express, __dirname),
	apiRoutes = require('./app/routes/apiRouter.js')(app, express);

app.use('/', appRoutes);
app.use('/api', apiRoutes);

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/public/views/404.html');
});

app.listen(config.port);