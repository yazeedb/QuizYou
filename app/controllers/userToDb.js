function userToDb (newUser) {
	var User = require('../models/user.js'),
		user = new User(),
		key;

	for(key in newUser) {
		user[key] = newUser[key];
	}

	user.save(function (err, saved) {
		if (err)
			return err;

		console.log('User saved');
		return saved;
	});
}

module.exports = userToDb;