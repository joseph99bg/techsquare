import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

function BlogListItem(post) {
    return (
        <div className="blog-list-item">
            <img src={post.image} alt={post.title}/>
            <h4 className="title">{post.title}</h4>
            <p className="description">{post.description}</p>
            <Link to={ "/post/" + post.id }><button>Read More</button></Link>
        </div>
    )
}

export default BlogListItem;