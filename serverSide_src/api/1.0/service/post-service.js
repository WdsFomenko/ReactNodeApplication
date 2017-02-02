'use strict';
var PostDao = require('../dao/post-dao');

class PostService {
	static find() {
		return PostDao.find();
	}


	static findOne(postId) {
		return PostDao.findOne(postId);
	}


	static destroy(postId) {
		return PostDao.destroy(postId);
	}


	static update(postId, postBody) {
		return PostDao.update(postId, postBody);
	}


	static create(postBody) {
		return PostDao.create(postBody);
	}


	static addLike(postId) {
		// f.g
		//
		// require User service
		// UserService.addLikedPost(post)
		//
		// post.addlikeCount();
		// save(post)
	}
}

module.exports = PostService;

