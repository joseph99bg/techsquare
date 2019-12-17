import React, { Fragment, Component } from 'react';
import './style.css';
import ListItem from '../ListItem';
import postService from '../../services/post-services'

const renderCards = (posts, myPost) => {
    return posts.map(post => {
        return (
            <Fragment key={post._id}>
                <ListItem {...post} myPost={myPost}/>
            </Fragment>
        )
    })
}


class BlogList extends Component {
    state = {
        posts: null
    }

    componentDidMount() {
        if (this.props.myPosts) {
            postService.loadMy().then(posts => {
                this.setState({ posts })
            })
        } else if (!this.props.isLogged) {
            postService.load(false, 3).then(posts => {
                this.setState({ posts })
            })
        } else {
            postService.load().then(posts => {
                this.setState({ posts })
            })
        }
    }

    render() {
        const { posts } = this.state;
        const { myPosts } = this.props;
        const { isLogged } = this.props;
        if (posts) {
            return (
                <div className="blog-list-holder">
                    { !isLogged && <h1>Latest Posts</h1> }
                    { isLogged && <h1>All Posts</h1> }
                    {renderCards(posts, myPosts)}
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }
}

export default BlogList;