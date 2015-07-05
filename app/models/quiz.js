var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var quizSchema = new Schema({
	author: String,
	title: String,
	desc: String,
	questions: [{
		question: String,
		choices: [String],
		correctAnswer: String
	}]
});

module.exports = mongoose.model('quiz', quizSchema);