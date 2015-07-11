quizYou.service('validateFormService', ['$state', function($state){
	this.validateQuiz = function (formIsValid, nextState) {
		if (formIsValid) {
			$state.go(nextState);
		} else {
			return false;
		}
	}
}]);