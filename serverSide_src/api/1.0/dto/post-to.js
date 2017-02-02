'use strict';

class PostTo {
	constructor(post) {
		this.id = post.id;
		this.name = post.name;
		this.price = post.price;
		this.description = post.description;
	}

	static transform(post) {
		return new PostTo(post);
	}
}

module.exports = PostTo;
