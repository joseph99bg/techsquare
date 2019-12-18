const models = require('../models');

module.exports = {
	get: {
		all: (req, res, next) => {
			const limit = +req.query.limit;
			if (limit) {
		      	models.Post.find().populate('author').sort({ createdAt: -1 }).limit(limit)
		        	.then(posts => res.send(posts))
		        	.catch(next);
		      	return;
		    }
		  	models.Post.find().populate('author').sort({ createdAt: -1 })
		    	.then(posts => res.send(posts))
		    	.catch(next);
		},
		one: (req, res, next) => {
			const id = req.params.id;
		  	models.Post.find({ _id: id }).populate('author')
		    	.then(post => res.send(post))
		    	.catch(next);
		},
		authorPosts: (req, res, next) => {
			const userId = req.user._id;
			models.Post.find({ author: userId }).populate('author').sort({ createdAt: -1 })
				.then(posts => res.send(posts))
		    	.catch(next);
		}
	},
	post: {
		create: (req, res, next) => {
			const { title, content, image } = req.body;
			const { _id } = req.user;

			models.Post.create({ title, content, image, author: _id })
			    .then((createdPost) => {
			    	return Promise.all([
			          	models.User.updateOne({ _id }, { $push: { posts: createdPost } }),
			          	models.Post.findOne({ _id: createdPost._id })
			        ]);
			    })
			    .then(([modifiedObj, postObj]) => {
			        res.send(postObj);
			    })
			    .catch(next);
		},
		edit: (req, res, next) => {
			const id = req.params.id;
			const { title, content, image } = req.body;
			models.Post.updateOne({ _id: id }, { title, content, image })
				.then(post => res.send(post))
				.catch(next);
		},
		delete: (req, res, next) => {
			const id = req.params.id;
			models.Post.deleteOne({ _id: id })
				.then((post) => res.send(post))
			    .catch(next);
		}
	}
}