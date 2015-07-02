quizYou.controller('createQuizController', [function () {
	var self = this;

	self.createQuiz = function () {
		console.log(self);
	};
}]);

quizYou.controller('quizzesController', ['$resource', function ($resource) {
	var self = this;

	self.getQuizzes = $resource('/api/quizzes');
	
	self.quizzes = self.getQuizzes.query();
	console.log(self);
}]);