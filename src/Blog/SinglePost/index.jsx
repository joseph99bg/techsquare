import React from 'react';
import postService from '../../services/post-services'
import './style.css';

class SinglePost extends React.Component {
    constructor(props) {
        super()
    }
    state = {
        post: null
    }

    componentDidMount() {
        postService.load(this.props.match.params.id).then(post => {
            let singlePost = post[0];
            this.setState({ post: singlePost })
        })
    }

    

    render() {
        const post = this.state.post;
        return post ? <div className="post-item">
                <img src={this.state.post.image} alt={this.state.post.title}/>
                <h4 className="title">{this.state.post.title}</h4>
                <p className="description">{this.state.post.content}</p>
            </div> : <div>Loading...</div>
    }
}

export default SinglePost;