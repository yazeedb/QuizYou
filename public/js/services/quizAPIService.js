quizYou.service('quizAPIService', ['$http', function ($http){
	
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
		return $http.post('/api/quizzes', {quiz: quiz});
	};
}]);