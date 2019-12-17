const router = require('express').Router();
const models = require('../models');
const jwt = require('../modules/jwt');
const userRouter = require('./user');
const postsRouter = require('./posts');
const commentsRouter = require('./comment');

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/user', userRouter);

router.use('/post', postsRouter);

router.use('/comment', commentsRouter);

module.exports = router;