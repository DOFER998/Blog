import { Request, Response, NextFunction } from 'express';
import { UnprocessableEntityError, NotFoundError } from '../errors';
import { User } from '../../prisma/generated/client';
import { Repository } from '../interfaces';

export class UsersController {
  constructor(private readonly usersRepository: Repository<User>) {}

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email } = req.body;

      if (!name || !email) {
        throw new UnprocessableEntityError('Name and email are required');
      }

      const data = await this.usersRepository.create({ name, email });

      res.status(200).json({ data });
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const { name, email } = req.body;

      const user = await this.usersRepository.getById({ id });

      if (!user) {
        throw new NotFoundError('User not found');
      }
      if (!name || !email) {
        throw new UnprocessableEntityError('Name and email are required');
      }

      const data = await this.usersRepository.update({ id, name, email });

      res.status(200).json({ data });
    } catch (err) {
      next(err);
    }
  }

  async destroy(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const user = await this.usersRepository.getById({ id });

      if (!user) {
        throw new NotFoundError('User not found');
      }

      const data = await this.usersRepository.delete({ id });

      res.status(200).json({ data });
    } catch (err) {
      next(err);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const data = await this.usersRepository.getById({ id });

      if (!data) {
        throw new NotFoundError('User not found');
      }

      res.status(200).json({ data });
    } catch (err) {
      next(err);
    }
  }

  async getAll(res: Response, next: NextFunction) {
    try {
      const data = await this.usersRepository.getAll();

      res.status(200).json({ data });
    } catch (err) {
      next(err);
    }
  }
}
