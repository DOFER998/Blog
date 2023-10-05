import { Request, Response, NextFunction } from 'express';
import { UnprocessableEntityError, NotFoundError } from '../errors';
import { Post } from '../../../../prisma/generated/client';
import { Repository } from '../interfaces';

export class PostsController {
  constructor(private readonly postsRepository: Repository<Post>) {}

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, content, authorId } = req.body;

      if (!content || !title || !authorId) {
        throw new UnprocessableEntityError('Content, title and authorId are required');
      }

      const data = await this.postsRepository.create({ title, content, authorId });

      res.status(200).json({ data });
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const { title, content } = req.body;

      const post = await this.postsRepository.getById({ id });

      if (!post) {
        throw new NotFoundError('Post not found');
      }
      if (!content || !title) {
        throw new UnprocessableEntityError('Content and title are required');
      }

      const data = await this.postsRepository.update({ id, title, content });

      res.status(200).json({ data });
    } catch (err) {
      next(err);
    }
  }

  async destroy(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const post = await this.postsRepository.getById({ id });

      if (!post) {
        throw new NotFoundError('Post not found');
      }

      const data = await this.postsRepository.delete({ id });

      res.status(200).json({ data });
    } catch (err) {
      next(err);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const data = await this.postsRepository.getById({ id });

      if (!data) {
        throw new NotFoundError('Post not found');
      }

      res.status(200).json({ data });
    } catch (err) {
      next(err);
    }
  }

  async getAll(res: Response, next: NextFunction) {
    try {
      const data = await this.postsRepository.getAll();

      res.status(200).json({ data });
    } catch (err) {
      next(err);
    }
  }
}
