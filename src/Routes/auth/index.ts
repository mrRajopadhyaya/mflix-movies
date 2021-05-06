import { Router } from 'express';
const router = Router();
import { signIn, createUser } from './auth.controller';

router.route('/').post(signIn);
router.route('/create-user').post(createUser);

export default router;
