import React from 'react'
import postService from '../../../services/post-services'
import './style.css'

const AddCommentForm = ({ history, postId, handleNewComment }) => {
    const textareaRef = React.useRef();

    const AddComment = React.useCallback(() => {
        const value = textareaRef.current.value;
        postService.createComment(postId, { content: value })
            .then(() => {
                handleNewComment();
                textareaRef.current.value = ''
            });
    }, [textareaRef, history]);

    return <div className="AddComment">
        <h1>Add a Comment:</h1>
        <form>
            <textarea ref={textareaRef} placeholder="Comment..."></textarea>
            <div className="btn-holder">
                <button type="button" onClick={AddComment}>Add Comment</button>
            </div>
        </form>
    </div>;
}

export default AddCommentForm