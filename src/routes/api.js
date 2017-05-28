import express from 'express';
import userModel from '../models/user.js';

const expressRouter = express.Router();

expressRouter.get('/users', userModel.getCollection);

module.exports = expressRouter;
