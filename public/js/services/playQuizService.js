quizYou.service('playQuizService', [function(){
	this.checkAnswer = function (submittedAnswer, correctAnswer) {
		//Evaluates true if answer is correct, false if not
		return submittedAnswer === correctAnswer;
	};
}]);