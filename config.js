module.exports = {
	port: process.env.PORT || 8080,
	db: 'mongodb://localhost/quizYou',
	multerConfig: {
		onFileUploadStart: function (file) {
			console.log('Uploading...');
		}
	}
};