import React, { Fragment, Component } from 'react';
import './style.css';
import ListItem from '../ListItem';
import postService from '../../services/post-services'

const renderCards = (posts) => {
    return posts.map(post => {
        return (
            <Fragment key={post.id}>
                <ListItem {...post}/>
            </Fragment>
        )
    })
}


class BlogList extends Component {
    state = {
        posts: null
    }

    componentDidMount() {
        postService.load().then(posts => {
            this.setState({ posts })
        })
    }

    render() {
        const { posts } = this.state;
        return posts ? <div className="blog-list-holder">
                {renderCards(posts)}
            </div> : <div>Loading...</div>
    }
}

export default BlogList;