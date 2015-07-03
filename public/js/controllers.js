//Create a quiz
quizYou.controller('createQuizController', ['$http', function ($http) {
	var self = this;

	self.quiz = {
		author: '',
		title: '',
		questions: []
	}
	
	self.currentQ = {
		question: '',
		choices: [],
		correctAnswer: ''
	};

	//Add current question to quiz questions array
	self.appendToQuiz = function () {
		self.currentQ.choices.push(self.currentQ.correctAnswer);

		var q = {
			question: self.currentQ.question,
			choices: self.currentQ.choices,
			correctAnswer: self.currentQ.correctAnswer
		}; 

		self.currentQ = {
			question: '',
			choices: [],
			correctAnswer: ''
		};

		self.quiz.questions.push(q);
	};

	//Upload quiz to database
	self.uploadQuiz = function () {
		self.appendToQuiz();

		var dbCall = $http.post('/api/upload', {quiz: self.quiz});
		
		dbCall.success(function (data, status, headers, config) {
			console.log(data);
			console.log(status);
		})
		.error(function (data, status) {
			console.log(data);
			console.log(status);
		});
	};
}]);


//View all quizzes
quizYou.controller('quizzesController', ['$resource', function ($resource) {
	var self = this;

	self.quizzes = $resource('/api/quizzes').query();
}]);