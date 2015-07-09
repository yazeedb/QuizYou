module.exports = function (app, express) {
	//Router for our API
	var api = express.Router();

	api.route('/quizzes')
		//Get all quizzes from the database
		.get(function (req, res) {
			var getAllQuizzes = require('../controllers/getAllQuizzes.js');

			getAllQuizzes().exec(function (err, quizzes) {
				if (err)
					return err;

				return res.json(quizzes);
			});
		})
		//Upload a quiz to the database
		.post(function (req, res) {
			var quizToDb = require('../controllers/quizToDb.js');

			quizToDb(req.body.quiz);
		});

	//Find a single quiz by _id
	api.get('/quizzes/:_id', function (req, res) {
		var getOneQuiz = require('../controllers/getOneQuiz.js');

		getOneQuiz(req.params._id).exec(function (err, quiz) {
			if (err)
				return err;

			return res.json(quiz);
		});
	});

	//Catchall route for API
	api.get('*', function (req, res) {
		res.json({ message: '404. Not found' });
	});

	return api;
};