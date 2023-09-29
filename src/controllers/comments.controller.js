import { CommentsRepository } from '../repositories/comments.repository.js';
import { UnprocessableEntityError } from '../errors/UnprocessableEntityError.js';
import { NotFoundError } from '../errors/NotFoundError.js';

const commentsRepository = new CommentsRepository();

export class CommentsController {

  async create(req, res, next) {
    try {
      const { content, postId, authorId } = req.body;

      if (!content || !postId || !authorId) {
        throw new UnprocessableEntityError('Content, postId and authorId are required');
      }

      const data = await commentsRepository.create(content, postId, authorId);

      res.status(200).json({ data });

    } catch (err) {

      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;

      const { content } = req.body;

      const comment = await commentsRepository.getById(id);

      if (!comment) {
        throw new NotFoundError('Comment not found');
      }
      if (!content) {
        throw new UnprocessableEntityError('Content is required');
      }

      const data = await commentsRepository.update(id, content);

      res.status(200).json({ data });

    } catch (err) {

      next(err);
    }
  }

  async destroy(req, res, next) {
    try {
      const { id } = req.params;

      const comment = await commentsRepository.getById(id);

      if (!comment) {
        throw new NotFoundError('Comment not found');
      }

      const data = await commentsRepository.delete(id);

      res.status(200).json({ data });

    } catch (err) {

      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;

      const data = await commentsRepository.getById(id);

      if (!data) {
        throw new NotFoundError('Comment not found');
      }

      res.status(200).json({ data });

    } catch (err) {

      next(err);
    }
  }

  async getAll(req, res, next) {
    try {
      const data = await commentsRepository.getAll();

      res.status(200).json({ data });
    } catch (err) {

      next(err);
    }
  }
}
