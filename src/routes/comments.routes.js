import { Router } from 'express';
import { CommentController } from '../controllers/comments.controller.js';


const router = Router();


router.get('/:id', CommentController.getById);
router.get('/', CommentController.getAll);
router.post('/', CommentController.create);
router.patch('/:id', CommentController.update);
router.delete('/:id', CommentController.delete);


module.exports = router;