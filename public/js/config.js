quizYou.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/templates/home.html'
	})

	.state('signup', {
		url: '/signup',
		templateUrl: './views/templates/signup.html',
		controller: 'signupController',
		controllerAs: 'signupCtrl'
	})

	.state('login', {
		url: '/login',
		templateUrl: './views/templates/login.html'
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

	.state('quizzes', {
		url: '/quizzes',
		templateUrl: './views/templates/quizList.html',
		controller: 'quizzesController',
		controllerAs: 'quizzesCtrl'
	})

	.state('play', {
		url: '/quizzes/{_id}',
		templateUrl: './views/templates/quiz.html',
		controller: 'playQuizController',
		controllerAs: 'pqCtrl'
	});

	/*.state('play.question', {

	});*/
}]);