import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import postService from '../../services/post-services'
import './style.css';

class ListItem extends React.Component {
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
        const myPost = this.props.myPost
        
        if (deleted) {
            return <Redirect to='/my-posts'/>
        } else {
            return (
                <div className="blog-list-item">
                    { post.image && <img src={post.image} alt={post.title}/> }
                    { !post.image && <img src="/images/no-image.png" alt={post.title}/> }
                    <h4 className="title">{post.title}</h4>
                    <p className="description">{post.content}</p>
                    <h6 className="author">Author: {post.author.username}</h6>
                    <Link to={ "/post/" + post._id }>
                        <button>Read More</button>
                    </Link>

                    { myPost &&
                    <Link to={ "/edit-post/" + post._id }>
                        <button className="edit">
                            <i className="fas fa-edit"></i>
                        </button>
                    </Link> }

                    { myPost && 
                    <button className="delete" onClick={() => this.handleDelete(post._id)}>
                        <i className="far fa-trash-alt"></i>
                    </button> }
                </div>
            )
        }
    }
}

export default ListItem;