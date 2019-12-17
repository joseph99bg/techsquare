import React from 'react'
import postService from '../../services/post-services'
import { Redirect } from 'react-router-dom'
import './style.css'

class CreatePost extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            content: '',
            image: '',
            error: null
        }
    }

    validateInput = (event) => {
        if (event.target.name === 'title') {
            if (event.target.value.length < 5) {
                this.setState({
                    error: 'Title should be longer than 5 characters!'
                });
            } else {
                this.setState({
                    error: null
                });
            }
        } else if (event.target.name === 'content') {
            if (event.target.value.length < 10) {
                this.setState({
                    error: 'Content should be longer than 10 characters!'
                });
            } else {
                this.setState({
                    error: null
                });
            }
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    submitHandler = (event) => {
        event.preventDefault();
        postService.create(this.state)
            .then(() => {
                this.props.history.push('/')
            })
            .catch(err => {
                this.setState({
                    error: 'An error occured while creating your post!'
                })
            })
    }
    showWidget = (widget) => {
        widget.open();
    }
    checkUploadResult = (resultEvent) => {
        if (resultEvent.event === 'success') {
            this.setState({ image: resultEvent.info.secure_url })
        }  
    }

    render() {
        const { title, content, error } = this.state;
        
        let widget = window.cloudinary.createUploadWidget({
            cloudName: 'techsquare',
            uploadPreset: 'default-unsigned'},
            (error, result) => { this.checkUploadResult(result) }
        )

        return (
            <div className="create-post-page">
                <h1>Create Post</h1>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor='title'>Title:</label>
                        <input type="text"
                            value={title}
                            onChange={this.handleChange}
                            id="title"
                            name="title"
                            onBlur={this.validateInput} />
                    </div>
                    <div>
                        <label htmlFor='content'>Content:</label>
                        <textarea
                            name="content"
                            id="content"
                            cols="30"
                            rows="10"
                            value={content}
                            onChange={this.handleChange}
                            onBlur={this.validateInput}></textarea>
                    </div>
                    <div>
                        <label htmlFor='image'>Image:</label>
                        <a onClick={(event) => this.showWidget(widget)}>Upload Image</a>
                    </div>
                    { error ? <div className="error">{error}</div> : null }
                    <button type="submit">Create</button>
                </form>
            </div>
        )
    }
}

export default CreatePost