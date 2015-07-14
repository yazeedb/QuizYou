function quizToDb (newQuiz) {
	var Quiz = require('../models/quiz.js'),
		quiz = new Quiz(),
		key;

	for(key in newQuiz) {
		quiz[key] = newQuiz[key];
	}

	quiz.save(function (err, saved) {
		if (err)
			return err;

		return saved;
	});
}

module.exports = quizToDb;