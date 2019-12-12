import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import postService from '../../services/post-services'
import './style.css';

class BlogListItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            deleted: false
        }
    }

    handleDelete(id) {
        postService.delete(id)
            .then(() => this.setState({ deleted: true }))
    }
    
    render() {
        const post = this.props;
        const { deleted } = this.state;
        if (deleted) {
            return <Redirect to='/'/>
        } else {
            return (
                <div className="blog-list-item">
                    <img src={post.image} alt={post.title}/>
                    <h4 className="title">{post.title}</h4>
                    <p className="description">{post.content}</p>
                    <Link to={ "/post/" + post._id }><button>Read More</button></Link>
                    <button onClick={() => this.handleDelete(post._id)}>Delete</button>
                    <Link to={ "/edit-post/" + post._id }><button>Edit</button></Link>
                </div>
            )
        }
    }
}

export default BlogListItem;