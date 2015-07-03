module.exports = function (app, express) {
	var api = express.Router();

	api.get('/', function (req, res) {
		res.json({ message: 'This is the API' });
	});

	api.get('/quizzes', function (req, res) {
		var getAllQuizzes = require('../controllers/getAllQuizzes.js');

		getAllQuizzes().exec(function (err, quizzes) {
			if (err)
				return err;			

			return res.json(quizzes);
		});
	});

	api.get('/quizzes/:id', function (req, res) {
		res.json(req.params);
	});

	api.post('/upload', function (req, res) {
		var quizToDb = require('../controllers/quizToDb.js');
		
		if (quizToDb(req.body.quiz))
			return true;
	});

	api.get('*', function (req, res) {
		res.json({ message: '404. Not found' });
	});

	return api;
};