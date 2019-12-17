const router = require('express').Router();
const auth = require('../utils/auth');
const controllers = require('../controllers');

router.get('/:id', controllers.Comment.get.postComments);

router.post('/:id', auth(), controllers.Comment.post.create);

module.exports = router;