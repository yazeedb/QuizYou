quizYou.service('playQuizService', [function(){
	this.checkAnswer = function (submittedAnswer, correctAnswer) {
		//Evaluates true if answer is correct, false if not
		return submittedAnswer === correctAnswer;
	};

	this.giveAnswerFeedback = function (feedbackType) {
		//Throw an error that asks for a type of feedback
		//May add negative feedback in the future, so I will keep this
		if (!feedbackType)
			throw new Error('Must specify a type of feedback: Positive or negative!');

		var allFeedback = {
			positive: [
				'Good job!',
				'That\'s right!',
				'Fantastic!',
				'Well done!',
				'Super!'
			]/*,
			negative: [
				Perhaps I will add some here  
			]*/
		};

		//Positive or negative feedback, based on the function's feedbackType parameter
		var feedbackToGive = allFeedback[feedbackType];

		//Generate a random number between 0 and the last index in the feedback arrays
		randomFeedback = Math.floor(Math.random() * allFeedback[feedbackType].length);

		//Return that random piece of feedback
		return feedbackToGive[randomFeedback];
	};
}]);