module.exports = function (app, express, __dirname) {
	var appRouter = express.Router();

	appRouter.get('/', function (req, res) {
		res.sendFile(__dirname + '/public/views/index.html');
	});

	return appRouter;
};