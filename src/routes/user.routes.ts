import { NextFunction, Request, Response, Router } from 'express';
import { prisma } from '../db';
import { UsersRepository } from '../repositories';
import { UsersController } from '../controllers';

const router = Router();
const usersController = new UsersController(new UsersRepository(prisma));

router
  .get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    await usersController.getById(req, res, next);
  })
  .get('/', async (_, res: Response, next: NextFunction) => {
    await usersController.getAll(res, next);
  })
  .post('/', async (req: Request, res: Response, next: NextFunction) => {
    await usersController.create(req, res, next);
  })
  .patch('/:id', async (req: Request, res: Response, next: NextFunction) => {
    await usersController.update(req, res, next);
  })
  .delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    await usersController.destroy(req, res, next);
  });

export default router;
