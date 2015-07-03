//Create a quiz
quizYou.controller('createQuizController', ['$http', '$state', 'quizService', function ($http, $state, quizService) {
	var self = this;

	//Create a new quiz object. This will hold all final quiz data, and will be sent to the database at the end
	self.quiz = quizService.newQuiz();

	//This object will track the current question our user is filling out. Once they add a new question or submit the form, this object will be saved to our self.quiz.questions array
	self.current = {
		question: '',
		choices: [],
		correctAnswer: ''
	};

	//Add current question to quiz questions array
	self.appendToQuiz = function () {
		//Since quizService.appendToQuiz returns a new current question object, setting self.current equal to that will reset it. This will allow it to track the user's next question
		self.current = quizService.appendToQuiz(self.current, self.quiz);
	};

	//Upload quiz to database
	self.uploadQuiz = function () {
		self.appendToQuiz();
		quizService.uploadQuiz(self.quiz);
	};
}]);


//View all quizzes
quizYou.controller('quizzesController', ['$resource', 'quizService', function ($resource, quizService) {
	var self = this;

	var getQuizzes = quizService.getAllQuizzes();

	getQuizzes.success(function (data, status) {
		self.quizzes = data;
	})
	.error(function (error, status) {
		return error;
	});
}]);