quizYou.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function ($urlRouterProvider, $stateProvider, $locationProvider) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/templates/home.html'
	})

	.state('create', {
		abstract: true,
		url: '/create',
		templateUrl: './views/templates/form.html',
		controller: 'createQuizController',
		controllerAs: 'cqCtrl'
	})

	.state('create.name', {
		url: '',
		templateUrl: './views/templates/createQuiz/create.html'
	})

	.state('create.addQuestion', {
		url: '/addQuestion',
		templateUrl: './views/templates/createQuiz/addQuestion.html'
	})

	.state('create.uploadQuiz', {
		url: '/upload',
		templateUrl: './views/templates/createQuiz/upload.html'
	})

	.state('quizzes', {
		url: '/quizzes',
		templateUrl: './views/templates/quizzes.html',
		controller: 'quizzesController',
		controllerAs: 'quizzesCtrl'
	})

	.state('play', {
		url: '/quizzes/?_id',
		templateUrl: './views/templates/quiz.html',
		controller: 'playQuizController',
		controllerAs: 'pqCtrl'
	});

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
}]);