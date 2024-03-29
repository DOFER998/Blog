import { NextFunction, Request, Response, Router } from 'express';
import { CommentsController } from '../controllers';
import { CommentsRepository } from '../repositories';
import { prisma } from '../db';

const router = Router();
const commentsController = new CommentsController(new CommentsRepository(prisma));

router
  .get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    await commentsController.getById(req, res, next);
  })
  .get('/', async (_, res: Response, next: NextFunction) => {
    await commentsController.getAll(res, next);
  })
  .post('/', async (req: Request, res: Response, next: NextFunction) => {
    await commentsController.create(req, res, next);
  })
  .patch('/:id', async (req: Request, res: Response, next: NextFunction) => {
    await commentsController.update(req, res, next);
  })
  .delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    await commentsController.destroy(req, res, next);
  });

export default router;
