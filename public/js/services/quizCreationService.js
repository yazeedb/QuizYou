quizYou.service('quizCreationService', [function (){

	//Create a new quiz object
	this.newQuiz = function () {
		return {
			author: '',
			title: '',
			desc: '',
			questions: []
		};
	};

	this.newQuestion = function () {
		return {
			question: '',
			choices: [],
			correctAnswer: ''
		};
	};

	this.appendToQuiz = function (current, quiz) {
		//First, add the "correctAnswer" choice to our current question's choice array. This is because it wasn't added through ng-model
		current.choices.push(current.correctAnswer);

		//Then push the current question with its choices into the quiz.question array
		quiz.questions.push(current);

		//Return a new question object to reset the current question
		return this.newQuestion();
	};
}]);