import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Link from '../shared/Link';

import './navigation.css';

class Navigation extends React.Component {
    render() {
        const { isLogged } = this.props;
        return (
            <header>
                <div className="top-bar">
                    { !isLogged && <Link to="/login">Login</Link> }
                    { !isLogged && <Link to="/register">Register</Link> }
                    { isLogged && <Link to="/profile">My Profile</Link> }
                </div>
                <div className="navigation-holder">
                    <div className="logo-holder">
                        <Link to="/">
                            <img src="/images/logo.jpg" alt=""/>
                        </Link>
                    </div>
                    <ul className="navigation-list">
                        <li>
                            <Link to="/posts">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        {/* <li>
                            <a href="#">My Posts</a>
                        </li> */}
                        <li>
                            <a href="/add-post">Add Post</a>
                        </li>
                        <li>
                            <Link to="/contacts">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Navigation;