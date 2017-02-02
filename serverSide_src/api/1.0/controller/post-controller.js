'use strict';
var PostTo = require('../dto/post-to');
var PostsTo = require('../dto/posts-to');
var PostService = require('../service/post-service');

class PostController {
  static getPosts(req, res) {
    var findPr = PostService.find();
    findPr.then(function (posts) {
      res.status(200).send(
          new PostsTo(
              posts.map(function (post) {
//          post.descriptionToUppercase();
                return PostTo.transform(post);
              })
          )
      );
    }).catch(function (error) {
      res.status(500).send();
    });
  }


  static getPost(req, res) {
    var postId = req.params.id;
    var findPr = PostService.findOne(postId);

    findPr.then(function (posts) {
      res.status(200).send(
          new PostsTo(
              posts.map(function (post) {
                //                             post.descriptionToUppercase();
                return PostTo.transform(post);
              })
          )
      );
    }).catch(function (error) {
      res.status(500).send();
    });
  }


  static deletePost(req, res) {
    var postId = req.params.id;
    var findPr = PostService.destroy(postId);

    findPr.then(function (posts) {
      res.status(200).send(
          new PostsTo(
              posts.map(function (post) {
//                             post.descriptionToUppercase();
                return PostTo.transform(post);
              })
          )
      );
    }).catch(function (error) {
      res.status(500).send();
    });
  }


  static putPost(req, res) {
    var postId = req.params.id;
    var postBody = req.body;
    var findPr = PostService.update(postId, postBody);

    findPr.then(function (posts) {
      res.status(200).send(
          new PostsTo(
              posts.map(function (post) {
//                             post.descriptionToUppercase();
                return PostTo.transform(post);
              })
          )
      );
    }).catch(function (error) {
      res.status(500).send();
    });
  }


  static postPost(req, res) {
    var postBody = req.body;
    var findPr = PostService.create(postBody);

    findPr.then(function (posts) {
      res.status(200).send(
          new PostsTo(
              posts.map(function (post) {
                //                             post.descriptionToUppercase();
                return PostTo.transform(post);
              })
          )
      );
    }).catch(function (error) {
      res.status(500).send();
    });
  }

}

module.exports = PostController;
