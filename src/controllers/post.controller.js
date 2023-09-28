const { createPost, updatePost, deletePost, getPostById, getAllPosts } = require('../db');

export class PostController {
  static create(req, res, next) {
    createPost(req)
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        next(err);
      });
  }

  static update(req, res, next) {
    updatePost(req)
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        next(err);
      });
  }

  static destroy(req, res, next) {
    deletePost(req)
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        next(err);
      });
  }

  static getById(req, res, next) {
    getPostById(req)
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        next(err);
      });
  }

  static getAll(req, res, next) {
    getAllPosts()
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        next(err);
      });
  }
}
