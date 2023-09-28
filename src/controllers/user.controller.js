const { createUser, getAllUsers, updateUser, deleteUser, getUserById } = require('../db');

export class UserController {
  static create(req, res, next) {
    createUser(req)
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        next(err);
      });
  }

  static update(req, res, next) {
    updateUser(req)
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        next(err);
      });
  }

  static destroy(req, res, next) {
    deleteUser(req)
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        next(err);
      });
  }

  static getById(req, res, next) {
    getUserById(req)
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        next(err);
      });
  }

  static getAll(req, res, next) {
    getAllUsers()
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        next(err);
      });
  }
}

