module.exports = function (app, express) {
	//Router for our API
	var api = express.Router();

	api.get('/', function (req, res) {
		res.json({ message: 'This is the API' });
	});

	//Returns all quizzes in the database
	api.get('/quizzes', function (req, res) {
		var getAllQuizzes = require('../controllers/getAllQuizzes.js');

		getAllQuizzes().exec(function (err, quizzes) {
			if (err)
				return err;			

			return res.json(quizzes);
		});
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

	//Upload a quiz to the database
	api.post('/upload', function (req, res) {
		var quizToDb = require('../controllers/quizToDb.js');
		
		quizToDb(req.body.quiz);
	});

	//Catchall route for API
	api.get('*', function (req, res) {
		res.json({ message: '404. Not found' });
	});

	return api;
};