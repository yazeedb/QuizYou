var Q = require('q'),
	deferred = Q.defer();

function getAllQuizzes () {
	var Quiz = require('../models/quiz.js');

	Quiz.find({}, function (err, quizzes) {
		if (err)
			deferred.reject(err);
		else
			deferred.resolve(quizzes);
	});

	return deferred.promise;
}

module.exports = getAllQuizzes;