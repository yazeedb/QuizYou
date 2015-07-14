quizYou.service('signupUserService', ['$http', function($http){
	this.signupUser = function (user) {
		console.log(user);
		return $http.post('/api/signup', {user: user});
	};
}]);