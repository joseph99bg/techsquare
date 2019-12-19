import React from 'react';
import postService from '../../services/post-services'
import PostComments from '../Comments/PostComments/'
import AddCommentForm from '../Comments/AddCommentForm/'
import Loader from '../../Loader'
import './style.css';

class SinglePost extends React.Component {
    constructor(props) {
        super()
    }
    state = {
        post: null,
        comments: null,
        newComment: null
    }

    componentDidMount() {
        postService.load(this.props.match.params.id).then(post => {
            let singlePost = post[0];
            this.setState({ post: singlePost })
        })

        postService.getComments(this.props.match.params.id).then(comments => {
            this.setState({ comments })
        })
    }

    handleNewComment = () => {
        postService.getComments(this.props.match.params.id).then(comments => {
            this.setState({ comments })
        })
    }

    render() {
        const { post, comments } = this.state;
        const postId = this.props.match.params.id;
        const { isLogged } = this.props;

        let hasComments = false;
        if (comments != null) {
            if (comments.length > 0) {
                hasComments = true;
            }
        }

        if (post) {
            return (
                <div className="post-item">
                    { post.image && <img src={post.image} alt={post.title}/> }
                    <h4 className="title">{post.title}</h4>
                    <h6 className="author">Author: {post.author.username}</h6>
                    <pre className="description">{post.content}</pre>
                    <hr/>
                    { hasComments && <PostComments comments={comments} />}
                    { isLogged && <AddCommentForm postId={postId} handleNewComment={this.handleNewComment} /> }
                </div>
            )
        } else {
            return (
                <Loader />
            )
        }
    }
}

export default SinglePost;