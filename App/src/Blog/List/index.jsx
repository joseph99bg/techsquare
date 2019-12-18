import React, { Fragment, Component } from 'react';
import ListItem from '../ListItem';
import Loader from '../../Loader'
import postService from '../../services/post-services'
import './style.css';

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
        let title = 'Latest Posts';

        if (myPosts) {
            title = 'My Posts'
        } else if (isLogged) {
            title = 'All Posts'
        }
        
        if (posts) {
            if (posts)
            return (
                <div className="blog-list-holder">
                    <h1>{title}</h1>
                    {renderCards(posts, myPosts)}
                </div>
            )
        } else {
            return (
                <Loader />
            )
        }
    }
}

export default BlogList;