const router = require('express').Router();
const models = require('../models');
const auth = require('../modules/auth');
const controllers = require('../controllers');

router.post('/register', controllers.User.register);

router.post('/login', controllers.User.login);

router.post('/logout', controllers.User.logout);

router.get('/', auth(), controllers.User.get.all);

router.get('/:id', auth(), controllers.User.get.one);

router.put('/', auth(true), (req, res, next) => {
  const { id, email, firstName, lastName, password } = req.body;
  models.User.updateOne({ _id: id }, { email, firstName, lastName, password })
    .then((user) => res.send(user))
    .catch(next);
});

router.delete('/:id', auth(true), (req, res, next) => {
  const id = req.params.id;
  models.User.deleteOne({ _id: id })
    .then(deletedUser => res.send(deletedUser))
    .catch(next);
})

module.exports = router;