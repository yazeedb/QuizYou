quizYou.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function ($urlRouterProvider, $stateProvider, $locationProvider) {

	$stateProvider

	.state('home', {
		url: '/',
		templateUrl: './views/templates/home.html'
	})

	.state('create', {
		url: '/create',
		templateUrl: './views/templates/form.html',
		controller: 'createQuizController',
		controllerAs: 'cqCtrl'
	})

	.state('create.name', {
		url: '/name',
		templateUrl: './views/templates/createQuiz/create.html'
	})

	.state('create.questions', {
		url: '/quiz',
		templateUrl: './views/templates/createQuiz/newQuiz.html'
	})

	.state('allQuizzes', {
		url: '/quizzes',
		templateUrl: './views/templates/quizzes.html',
		controller: 'quizzesController',
		controllerAs: 'quizzesCtrl'
	});

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
}]);