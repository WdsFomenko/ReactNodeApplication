'use strict';
var UserDao = require('../dao/user-dao');

// must use some ORM
class User {
	constructor(user) {
		this.id = user.id;
		this.email = user.email;
		this.name = user.name;
		this.surname = user.surname;
		this.phone = user.phone;
		this.password = user.password;
	}

}

module.exports = User;
