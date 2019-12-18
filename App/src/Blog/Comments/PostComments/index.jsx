import React, { Fragment } from 'react'
import './style.css'

const renderCards = (comments) => {
    return comments.map(comment => {
        return (
            <Fragment key={comment._id}>
                <div className="post-comment">
                    <h3 className="author-name">{comment.author.username}</h3>
                    <p className="comment">
                        {comment.content}
                    </p>
                </div>
            </Fragment>
        )
    })
}

function PostComments(props) {
    const { comments } = props;
    return (
        <div className="post-comments-list">
            <h1>Comments:</h1>
            { comments && renderCards(comments) }
        </div>
    )
}

export default PostComments