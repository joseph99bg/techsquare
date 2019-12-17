const models = require('../models');

module.exports = {
	get: {
		postComments: (req, res, next) => {
			const postId = req.params.id;
			models.Comment.find({ post: postId }).populate('author')
				.then(comments => res.send(comments))
		    	.catch(next);
		}
	},
	post: {
		create: (req, res, next) => {
			const { content } = req.body;
			const userId = req.user._id;
			const postId = req.params.id;

			models.Comment.create({ content, author: userId, post: postId })
			    .then((createdComment) => {
			    	return Promise.all([
			          	models.User.updateOne({ userId }, { $push: { comments: createdComment } }),
			          	models.Post.updateOne({ postId }, { $push: { comments: createdComment } }),
			          	models.Comment.findOne({ _id: createdComment._id })
			        ]);
			    })
			    .then(([modifiedUser, modifiedPost, commentObj]) => {
			        res.send(commentObj);
			    })
			    .catch(next);
		},
		// edit: (req, res, next) => {
		// 	const id = req.params.id;
		// 	const { title, content, image } = req.body;
		// 	models.Post.updateOne({ _id: id }, { title, content, image })
		// 		.then(post => res.send(post))
		// 		.catch(next);
		// },
		// delete: (req, res, next) => {
		// 	const id = req.params.id;
		// 	models.Post.deleteOne({ _id: id })
		// 		.then((post) => res.send(post))
		// 	    .catch(next);
		// }
	}
}