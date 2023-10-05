import { commentRouter, postRouter, userRouter } from './routes';
import { ErrorHandler } from './middlewares';
import { Router } from 'express';

const router = Router();

router.use('/users', userRouter).use('/posts', postRouter).use('/comments', commentRouter);

router.use(ErrorHandler);

export default router;
