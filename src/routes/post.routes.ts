import { NextFunction, Request, Response, Router } from 'express';
import { PostsController } from '../controllers';
import { PostsRepository } from '../repositories';
import { prisma } from '../db';

const router = Router();
const postsController = new PostsController(new PostsRepository(prisma));

router
  .get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    await postsController.getById(req, res, next);
  })
  .get('/', async (_, res: Response, next: NextFunction) => {
    await postsController.getAll(res, next);
  })
  .post('/', async (req: Request, res: Response, next: NextFunction) => {
    await postsController.create(req, res, next);
  })
  .patch('/:id', async (req: Request, res: Response, next: NextFunction) => {
    await postsController.update(req, res, next);
  })
  .delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    await postsController.destroy(req, res, next);
  });

export default router;
