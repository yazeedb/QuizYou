//Create a quiz
quizYou.controller('createQuizController', [function () {
	var self = this;
	
	self.formData = {
		questions: []
	};

	self.addQuestion = function () {

	};
}]);


//View all quizzes
quizYou.controller('quizzesController', ['$resource', function ($resource) {
	var self = this;

	self.quizzes = $resource('/api/quizzes').query();
	console.log(self.quizzes);	
}]);