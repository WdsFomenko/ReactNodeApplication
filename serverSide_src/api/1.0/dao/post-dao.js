'use strict';
var fs = require('fs');
var mockUrl = './api/1.0/dao/mocks/posts.json';
var Post = require('../model/post');

class PostDao {
	static find() {
		return new Promise(function (resolve, reject) {
			fs.readFile(mockUrl, function (err, data) {
				resolve(data)
			});
		})
			.then(function (data) {
				return JSON.parse(data);
			})
			.then(function (data) {
				return data.map(function (post) {
					return new Post(post);
				})
			});
	}


	static findOne(postId) {
		return new Promise(function (resolve, reject) {
			fs.readFile(mockUrl, function (err, data) {
				resolve(data);
			});
		})
			.then(function (data) {
				return JSON.parse(data);
			})
			.then(function (data) {
				return data.filter(function (data) {
					return data.id == postId;
				});
			})
			.then(function (data) {
				return data.map(function (post) {
					return new Post(post);
				})
			})

	}


	static destroy(postId) {
		return new Promise(function (resolve, reject) {
			fs.readFile(mockUrl, function (err, data) {
				resolve(data);
			})
		})
			.then(function (data) {
				return JSON.parse(data);
			})
			.then(function (dataJson) {
				return dataJson.filter(function (post) {
					return post.id != postId;
				})
			})
			.then(function (newDataJson) {
				fs.writeFile(mockUrl, JSON.stringify(newDataJson), function (err) {
				});
				return newDataJson;
			})
			.then(function (posts) {
				return posts.map(function (post) {
					return new Post(post);
				});
			})
	}


	static update(postId, postBody) {
		return new Promise(function (resolve, reject) {
			fs.readFile(mockUrl, function (err, data) {
				resolve(data);
			})
		})
			.then(function (data) {
				return JSON.parse(data);
			})
			.then(function (posts) {
				return posts.map(function (post) {
					if (post.id == postId) {
						return postBody;
					} else {
						return post;
					}
				})
			})
			.then(function (posts) {
				fs.writeFile(mockUrl, JSON.stringify(posts));
				return posts;
			})
			.then(function (posts) {
				return posts.map(function (post) {
					return new Post(post);
				});
			});
	}


	static create(postBody) {
		return new Promise(function (resolve, reject) {
			fs.readFile(mockUrl, function (err, data) {
				resolve(data);
			})
		})
			.then(function (data) {
				return JSON.parse(data);
			})
			.then(function (posts) {
				posts.push(postBody);
				return posts;
			})
			.then(function (posts) {
				fs.writeFile(mockUrl, JSON.stringify(posts));
				return posts;
			})
			.then(function (posts) {
				return posts.map(function (post) {
					return new Post(post);
				});
			});
	}

}

module.exports = PostDao;
