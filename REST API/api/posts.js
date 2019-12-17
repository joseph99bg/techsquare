const router = require('express').Router();
const auth = require('../utils/auth');
const controllers = require('../controllers');

router.get('/', controllers.Post.get.all);
router.get('/details/:id', controllers.Post.get.one);
router.get('/my-posts', auth(), controllers.Post.get.authorPosts);

router.post('/create', auth(), controllers.Post.post.create);
router.put('/edit/:id', auth(), controllers.Post.post.edit);
router.delete('/delete/:id', auth(), controllers.Post.post.delete);

module.exports = router;