import express from 'express';
import userModel from './models/user.js';

const router = express.Router();

router.get('/users', userModel.getUserCollection);
router.post('/user', userModel.createUser);

module.exports = router;
