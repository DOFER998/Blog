import { PostsRepository } from '../repositories/posts.repository.js';
import { UnprocessableEntityError } from '../errors/UnprocessableEntityError.js';
import { NotFoundError } from '../errors/NotFoundError.js';

const postsRepository = new PostsRepository();

export class PostsController {

  async create(req, res, next) {
    try {
      const { title, content, authorId } = req.body;

      if (!content || !title || !authorId) {
        throw new UnprocessableEntityError('Content, title and authorId are required');
      }

      const data = await postsRepository.create(title, content, authorId);

      res.status(200).json({ data });

    } catch (err) {

      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;

      const { title, content } = req.body;

      const post = await postsRepository.getById(id);

      if (!post) {
        throw new NotFoundError('Post not found');
      }
      if (!content ||!title) {
        throw new UnprocessableEntityError('Content and title are required');
      }

      const data = await postsRepository.update(id, title, content);

      res.status(200).json({ data });

    } catch (err) {

      next(err);
    }
  }

  async destroy(req, res, next) {
    try {
      const { id } = req.params;

      const post = await postsRepository.getById(id);

      if (!post) {
        throw new NotFoundError('Post not found');
      }

      const data = await postsRepository.delete(id);

      res.status(200).json({ data });

    } catch (err) {

      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;

      const data = await postsRepository.getById(id);

      if (!data) {
        throw new NotFoundError('Post not found');
      }

      res.status(200).json({ data });

    } catch (err) {

      next(err);
    }
  }

  async getAll(req, res, next) {
    try {
      const data = await postsRepository.getAll();

      res.status(200).json({ data });

    } catch (err) {

      next(err);
    }
  }
}
