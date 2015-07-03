function quizToDb (newQuiz) {
	var Quiz = require('../models/quiz.js'),
		quiz = new Quiz();

	quiz.author = newQuiz.author;
	quiz.title = newQuiz.quizName;

	quiz.questions = [{
		question: newQuiz.question,
		choices: [newQuiz.correctAns, newQuiz.wrongAns1, newQuiz.wrongAns2, newQuiz.wrongAns3],
		correctAnswer: newQuiz.correctAns
	}];

	quiz.save(function (err, saved) {
		if (err)
			return err;

		return saved;
	});
}

module.exports = quizToDb;