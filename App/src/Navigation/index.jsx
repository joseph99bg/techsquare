import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function Navigation(props) {
    const { isLogged } = props;
    return (
        <header>
            <div className="top-bar">
                { !isLogged && <Link to="/login">Login</Link> }
                { !isLogged && <Link to="/register">Register</Link> }
                { isLogged && <Link to="/my-posts">My Posts</Link> }
                { isLogged && <Link to="/logout">Logout <i className="fas fa-sign-out-alt"></i></Link> }
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
                    { isLogged && <li>
                        <Link to="/add-post">Add Post</Link>
                    </li> }
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navigation;