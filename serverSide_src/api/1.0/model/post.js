'use strict';
var PostDao = require('../dao/post-dao');

// must use some ORM
class Post {
	constructor(post) {
		this.id = post.id;
		this.name = post.name;
		this.price = post.price;
		this.description = post.description;
	}

	descriptionToUppercase() {
		this.description = this.description.toUpperCase();
	}

}

module.exports = Post;
