const { createComment, updateComment, deleteComment, getCommentById, getAllComments } = require('../db');


export class CommentController {
  static create(req, res, next) {
    createComment(req)
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        next(err);
      });
  }

  static update(req, res, next) {
    updateComment(req)
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        next(err);
      });
  }

  static delete(req, res, next) {
    deleteComment(req)
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        next(err);
      });
  }

  static getById(req, res, next) {
    getCommentById(req)
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        next(err);
      });
  }

  static getAll(req, res, next) {
    getAllComments(req)
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        next(err);
      });
  }
}
