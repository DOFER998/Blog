import { Router } from 'express';
import { UserController } from '../controllers/user.controller.js';

const router = Router();


router.get('/:id', UserController.getById);
router.get('/', UserController.getAll);
router.post('/', UserController.create);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.destroy);


export default router;
