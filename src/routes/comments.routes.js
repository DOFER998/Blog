import { Router } from 'express';
import { CommentsController } from '../controllers/comments.controller.js';


const router = Router();
const commentsController = new CommentsController();


router.get('/:id', commentsController.getById);
router.get('/', commentsController.getAll);
router.post('/', commentsController.create);
router.patch('/:id', commentsController.update);
router.delete('/:id', commentsController.destroy);


export default router;
