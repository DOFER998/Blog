import { UsersRepository } from '../repositories/users.repository.js';
import { UnprocessableEntityError } from '../errors/UnprocessableEntityError.js';
import { NotFoundError } from '../errors/NotFoundError.js';

const usersRepository = new UsersRepository();

export class UsersController {

  async create(req, res, next) {
    try {
      const { name, email } = req.body;

      if (!name || !email) {
        throw new UnprocessableEntityError('Name and email are required');
      }

      const data = await usersRepository.create(name, email);

      res.status(200).json({ data });
    } catch (err) {

      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;

      const { name, email } = req.body;

      const user = await usersRepository.getById(id);

      if (!user) {
        throw new NotFoundError('User not found');
      }
      if (!name || !email) {
        throw new UnprocessableEntityError('Name and email are required');
      }

      const data = await usersRepository.update(id, name, email);

      res.status(200).json({ data });

    } catch (err) {

      next(err);
    }
  }

  async destroy(req, res, next) {
    try {
      const { id } = req.params;

      const user = await usersRepository.getById(id);

      if (!user) {
        throw new NotFoundError('User not found');
      }

      const data = await usersRepository.delete(id);

      res.status(200).json({ data });

    } catch (err) {

      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;

      const data = await usersRepository.getById(id);

      if (!data) {
        throw new NotFoundError('User not found');
      }

      res.status(200).json({ data });

    } catch (err) {

      next(err);
    }
  }

  async getAll(req, res, next) {
    try {
      const data = await usersRepository.getAll();

      res.status(200).json({ data });

    } catch (err) {

      next(err);
    }
  }
}
