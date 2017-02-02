'use strict';
var usersMock = require('./mocks/users');
var User = require('../model/user');
// var NotFoundError = require( 'api/lib/errors' ).NotFoundError;

class UserDao {
	static find(id) {
		return new Promise(function (resolve, reject) {
			var user;
			usersMock.forEach(function (item) {
				if (item.id == id) {
					user = new User(item);
				}
			});
			if (user) {
				resolve(user);
			} else {
				reject(new NotFoundError('user with specified id - ' + id + ' not found'));
			}
		});
	}

	static findByEmail(email) {
		return new Promise(function (resolve, reject) {
			var user;
			usersMock.forEach(function (item) {
				if (item.email == email) {
					user = new User(item);
				}
			});
			if (user) {
				resolve(user);
			} else {
				reject(new NotFoundError('user with specified email - ' + email + ' not found'));
			}
		});
	}

	static save(user) {
		return new Promise(function (resolve, reject) {
			var mockUser;
			usersMock.forEach(function (item) {
				if (item.id == user.getId()) {
					mockUser = item;
				}
			});
			if (user !== undefined) {
				mockUser.following = user.getFollowing();
				resolve(user);
			} else {
				reject(new NotFoundError('user with specified id - ' + id + ' not found'));
			}
		});
	}
}

module.exports.UserDao = UserDao;

