import { Router } from 'express';
const router = Router();
import { createNewPoll, getAllPoll, votePoll } from './poll.controller';

router.route('/').get(getAllPoll);
router.route('/').post(createNewPoll);
router.route('/vote').post(votePoll);

export default router;
