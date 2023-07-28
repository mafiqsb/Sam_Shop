import express from 'express';
import data from '../data.js';

import Product from '../models/productModel.js';
import User from '../models/userModel.js';
import malaysiaState from '../models/stateMalaysiaModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);

  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);

  await malaysiaState.deleteMany({});
  const createdMalaysiaState = await malaysiaState.insertMany(
    data.MalaysiaState
  );

  res.send({ createdProducts, createdUsers, createdMalaysiaState });
});

export default seedRouter;
