import { Router } from 'express';
import { PostController } from '../controllers/post.controller.js';

const router = Router();


router.get('/:id', PostController.getById);
router.get('/', PostController.getAll);
router.post('/', PostController.create);
router.patch('/:id', PostController.update);
router.delete('/:id', PostController.destroy);

export default router;