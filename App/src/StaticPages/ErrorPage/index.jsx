import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function ErrorPage() {
    return (
        <div className="error-page">
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <div className="btn-holder">
                <Link to="/">
                    <button><i className="fas fa-home"></i> Return to Home</button>
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage