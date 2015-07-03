function getAllQuizzes (callback) {
	var Quiz = require('../models/quiz.js');

	return Quiz.find({});
}

module.exports = getAllQuizzes;