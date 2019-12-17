const models = require('../models');
const jwt = require('../utils/jwt');

module.exports = {
  get: {
    all: (req, res, next) => {
      models.User.find()
        .then(users => res.send(users))
        .catch(next);
    },
    one: (req, res, next) => {
      models.User.find({ _id: req.params.id })
        .then(users => res.send(users))
        .catch(next);
    },
  },
	register: (req, res, next) => {
  		const { username, email, password } = req.body;
  		models.User.create({ username, email, password })
		    .then((user) => res.send(user))
		    .catch(err => {
		    	if (err.name == 'MongoError') {
		    		res.send('User with this email is already registered!')
		    	}
		    });
	},
	login: (req, res, next) => {
  		const { username, password } = req.body;
      	models.User.findOne({ username })
        	.then((user) => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
        	.then(([user, match]) => {
          		if (!match) {
            		res.status(401).send('Invalid username or password!');
            		return;
          		}

          		const token = jwt.createToken({ id: user._id });
          		res.cookie('x-auth-cookie', token).send(user);
        	})
        	.catch(next);
	},
	logout: (req, res, next) => {
      	const token = req.cookies['x-auth-cookie'];
      	models.TokenBlacklist.create({ token })
        	.then(() => {
          		res.clearCookie('x-auth-cookie').send('Logout successfully!');
        	})
        	.catch(next);
    }
}