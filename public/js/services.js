quizYou.service('quizService', ['$http', '$state', function ($http, $resource, $state){
	/*
		This service has to:
		1) Create a new quiz object
		2) Append each question to that object
		3) Send that object to the DB
	*/

	//Create a new quiz object
	this.newQuiz = function () {
		return {
			author: '',
			title: '',
			questions: []
		};
	};

	this.appendToQuiz = function (current, quiz) {
		//First, add the "correctAnswer" choice to our current question's choice array. This is because it wasn't added through ng-model
		current.choices.push(current.correctAnswer);

		//Then push the current question with its choices into the quiz.question array
		quiz.questions.push(current);

		//Return this object to reset the current question
		return {
			question: '',
			choices: [],
			correctAnswer: ''
		};
	};

	this.getAllQuizzes = function () {
		//Make a GET request to /api/quizzes.
		return $http.get('/api/quizzes');
	};

	this.getOneQuiz = function (_id) {
		//Construct the url based on what _id is passed in
		var quizUrl = '/api/quizzes/' + _id;

		//Make a GET request to that url
		return $http.get(quizUrl);
	};

	this.uploadQuiz = function (quiz) {
		//Make a POST request with our quiz data
		var postQuizzes = $http.post('/api/upload', {quiz: quiz});

		//If all is well
		postQuizzes.success(function (data) {
			return data;
		})
		//Otherwise
		.error(function (error) {
			return error;
		})
	};
}]);