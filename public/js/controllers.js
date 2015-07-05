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
quizYou.controller('quizzesController', ['quizService', function (quizService) {
	var self = this;

	//Retrieve all quizzes from the database
	var getQuizzes = quizService.getAllQuizzes();

	//If successful, assign self.quizzes to the incoming data
	getQuizzes.success(function (data, status) {
		console.log(data);
		self.quizzes = data;
	})
	//Otherwise, return the error
	.error(function (error, status) {
		return error;
	});
}]);

quizYou.controller('playQuizController', ['$state', 'quizService', function ($state, quizService) {
	var self = this;

	//Find the requested quiz in the database
	//This will search using the quiz's _id, found in the $state.params object
	var getOneQuiz = quizService.getOneQuiz($state.params._id);

	//If successful, assign self.quiz to the incoming data
	getOneQuiz.success(function (data, status) {
		console.log(data);
		self.quiz = data;
	})
	//Otherwise, return the error
	.error(function (error, status) {
		return error;
	});
}]);