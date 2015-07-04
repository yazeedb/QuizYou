var Quiz = require('../models/quiz.js');

function getOneQuiz (quiz_id) {
	return Quiz.findOne({ "_id": quiz_id });
}

module.exports = getOneQuiz;