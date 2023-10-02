import { Request, Response, NextFunction } from 'express';
import { UnprocessableEntityError, NotFoundError } from '../errors';
import { Repository } from '../interfaces/repository.interfaces';
import { Comment } from '../../prisma/generated/client';

export class CommentControllers {
  constructor(private readonly commentsRepository: Repository<Comment>) {}

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { content, postId, authorId } = req.body;

      if (!content || !postId || !authorId) {
        throw new UnprocessableEntityError('Content, postId and authorId are required');
      }

      const data = await this.commentsRepository.create({ content, postId, authorId });

      res.status(200).json({ data });
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const { content } = req.body;

      const comment = await this.commentsRepository.getById({ id });

      if (!comment) {
        throw new NotFoundError('Comment not found');
      }
      if (!content) {
        throw new UnprocessableEntityError('Content is required');
      }

      const data = await this.commentsRepository.update({ id, content });

      res.status(200).json({ data });
    } catch (err) {
      next(err);
    }
  }

  async destroy(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const comment = await this.commentsRepository.getById({ id });

      if (!comment) {
        throw new NotFoundError('Comment not found');
      }

      const data = await this.commentsRepository.delete({ id });

      res.status(200).json({ data });
    } catch (err) {
      next(err);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const data = await this.commentsRepository.getById({ id });

      if (!data) {
        throw new NotFoundError('Comment not found');
      }

      res.status(200).json({ data });
    } catch (err) {
      next(err);
    }
  }

  async getAll(res: Response, next: NextFunction) {
    try {
      const data = await this.commentsRepository.getAll();

      res.status(200).json({ data });
    } catch (err) {
      next(err);
    }
  }
}
