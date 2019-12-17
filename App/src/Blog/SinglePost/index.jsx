import React from 'react';
import postService from '../../services/post-services'
import PostComments from '../Comments/PostComments/'
import AddCommentForm from '../Comments/AddCommentForm/'
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
                    <img src={this.state.post.image} alt={this.state.post.title}/>
                    <h4 className="title">{this.state.post.title}</h4>
                    <h6 className="author">Author: {this.state.post.author.username}</h6>
                    <p className="description">{this.state.post.content}</p>
                    <hr/>
                    { hasComments && <PostComments comments={comments} />}
                    { isLogged && <AddCommentForm history={this.props.history} postId={postId} handleNewComment={this.handleNewComment} /> }
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }
}

export default SinglePost;