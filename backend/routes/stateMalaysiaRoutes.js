import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import malaysiaState from '../models/stateMalaysiaModel.js';

const stateMalaysiaRouter = express.Router();

stateMalaysiaRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const state = await malaysiaState.find();
    if (state) {
      res.send(state);
    } else {
      res.status(401).send({ message: 'no states found' });
    }
  })
);

export default stateMalaysiaRouter;
