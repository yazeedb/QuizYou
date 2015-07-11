//Create a quiz
quizYou.controller('createQuizController', ['$http', '$state', '$location', 'quizCreationService', 'quizAPIService', 'validateFormService', function ($http, $state, $location, quizCreationService, quizAPIService, validateFormService) {
	var self = this;

	//Create a new quiz object. This will hold all final quiz data, and will be sent to the database at the end
	self.quiz = quizCreationService.newQuiz();

	//This will track the current question our user is filling out.
	self.current = quizCreationService.newQuestion();

	//Add current question to quiz questions array
	self.appendToQuiz = function (form) {
		//Since quizCreationService.appendToQuiz returns a new current question object, setting self.current equal to that will reset it. This will allow it to track the user's next question

		form.$setUntouched();
		self.current = quizCreationService.appendToQuiz(self.current, self.quiz);
	};

	self.validateQuiz = validateFormService.validateQuiz;

	//Upload quiz to database
	self.uploadQuiz = function () {
		self.appendToQuiz();

		var postQuiz = quizAPIService.uploadQuiz(self.quiz);

		//If all is well
		postQuiz.success(function (data) {
			return data;
		})
		//Otherwise
		.error(function (error) {
			return error;
		});

		$location.url('/');
	};
}]);


//View all quizzes
quizYou.controller('quizzesController', ['quizAPIService', function (quizAPIService) {
	var self = this;

	//Retrieve all quizzes from the database
	var getQuizzes = quizAPIService.getAllQuizzes();

	//If successful, assign self.quizzes to the incoming data
	getQuizzes.success(function (data, status) {
		self.quizzes = data;
	})
	//Otherwise, return the error
	.error(function (error, status) {
		return error;
	});
}]);

quizYou.controller('playQuizController', ['$state', 'quizAPIService', function ($state, quizAPIService) {
	var self = this;

	//Find the requested quiz in the database
	//This will search using the quiz's _id, found in the $state.params object
	var getOneQuiz = quizAPIService.getOneQuiz($state.params._id);

	//If successful, assign self.quiz to the incoming data
	getOneQuiz.success(function (data, status) {
		self.quiz = data;
	})
	//Otherwise, return the error
	.error(function (error, status) {
		return error;
	});

	self.currentQ = 0;
}]);