import { Router } from 'express';
import { UsersController } from '../controllers/users.controller.js';

const router = Router();
const usersController = new UsersController();


router.get('/:id', usersController.getById);
router.get('/', usersController.getAll);
router.post('/', usersController.create);
router.patch('/:id', usersController.update);
router.delete('/:id', usersController.destroy);


export default router;
