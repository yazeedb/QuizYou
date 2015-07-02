module.exports = function (app, express) {
	var apiRouter = express.Router();

	apiRouter.get('/', function (req, res) {
		res.json({ message: 'This is the API' });
	});

	apiRouter.get('*', function (req, res) {
		res.json({ message: '404. Not found' });
	});

	return apiRouter;
};