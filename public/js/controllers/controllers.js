//Create a quiz
quizYou.controller('createQuizController', ['$http', '$state', '$location', 'quizCreationService', 'quizAPIService', function ($http, $state, $location, quizCreationService, quizAPIService) {
	var self = this;

	//Create a new quiz object. This will hold all final quiz data, and will be sent to the database at the end
	self.quiz = quizCreationService.newQuiz();

	//This will track the current question our user is filling out.
	self.current = quizCreationService.newQuestion();

	//Add current question to quiz questions array
	self.appendToQuiz = function (form) {
		//Since quizCreationService.appendToQuiz returns a new current question object, setting self.current equal to that will reset it. This will allow it to track the user's next question
		if (form) {
			form.$setUntouched();
		}
		
		self.current = quizCreationService.appendToQuiz(self.current, self.quiz);
	};

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

quizYou.controller('playQuizController', ['$state', '$timeout', 'quizAPIService', 'playQuizService',function ($state, $timeout, quizAPIService, playQuizService) {
	var self = this;

	//Current question to be displayed
	self.currentQuestionIndex = 0;
	//Lets us know if the user can move on to the next question
	self.userCanAdvance = false;

	//Find the requested quiz in the database
	var getOneQuiz = quizAPIService.getOneQuiz($state.params._id);

	//If successful, assign self.quiz to the incoming data
	getOneQuiz.success(function (data, status) {
		self.quiz = data;
	})
	//Otherwise, return the error
	.error(function (error, status) {
		return error;
	});

	self.checkAnswer = function (choiceIndex) {
		//If the user has already given the correct answer, why bother checking..?
		if (self.userCanAdvance)
			return false;

		//Current question being checked
		var currentQ = self.quiz.questions[self.currentQuestionIndex];

		//The choice submitted by the user
		var submittedAnswer = currentQ.choices[choiceIndex];
		//Current question's correct answer
		var correctAnswer = currentQ.correctAnswer;

		//If submittedAnswer is correct, self.userCanAdvance will evaluate to true, and the user can move on
		self.userCanAdvance = playQuizService.checkAnswer(submittedAnswer, correctAnswer);

		//self.wrongAnswer is being set to the opposite of self.userCanAdvance. So if one is true, the other is false
		self.wrongAnswer = !self.userCanAdvance;

		if (self.userCanAdvance) {
			var quizModalBg = angular.element('.quiz-modal-background');

			$timeout(function () {

				quizModalBg.removeClass('fadein');
			}, 2000);
			self.positiveFeedback = playQuizService.giveAnswerFeedback('positive');
		} else {
			var shakingIncorrect = angular.element('.answer-status.incorrect'),
				shakingClass = 'shake shake-vertical shake-constant';

			shakingIncorrect.addClass(shakingClass);

			$timeout(function () {
				shakingIncorrect.removeClass(shakingClass);
			}, 500);
		}
	};

	self.nextQuestion = function () {
		if (self.userCanAdvance) {
			self.userCanAdvance = false;
			self.currentQuestionIndex++;
		} else {
			console.log('nope');
		}
	};
}]);