import { Router } from 'express';
import { PostsController } from '../controllers/posts.controller.js';

const router = Router();
const postsController = new PostsController();


router.get('/:id', postsController.getById);
router.get('/', postsController.getAll);
router.post('/', postsController.create);
router.patch('/:id', postsController.update);
router.delete('/:id', postsController.destroy);

export default router;
