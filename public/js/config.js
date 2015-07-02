quizYou.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function ($urlRouterProvider, $stateProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('home', {
		url: '/',
		templateUrl: './views/templates/home.html',
		controller: function () {
			var self = this;
			console.log(self);
		}
	})

	.state('create', {
		url: '/create',
		templateUrl: './views/templates/createQuiz.html',
		controller: 'createQuizController',
		controllerAs: 'cqCtrl'
	})

	.state('allQuizzes', {
		url: '/quizzes',
		templateUrl: './views/templates/quizzes.html',
		controller: 'quizzesController',
		controllerAs: 'quizzesCtrl'
	});

	$locationProvider.html5Mode(true);
}]);