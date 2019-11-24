import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Link } from 'react-router-dom'
import BlogList from '../Blog/List/'
import Login from '../Account/Login'
import Register from '../Account/Register'
import Profile from '../Account/Profile'
import SinglePost from '../Blog/SinglePost'
import About from '../StaticPages/About'
import Contacts from '../StaticPages/Contacts'
import './navigation.css';

function Navigation() {
    return (
        <Router>
            <header>
                <div className="top-bar">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/profile">My Profile</Link>
                </div>
                <div className="navigation-holder">
                    <div className="logo-holder">
                        <Link to="/">
                            <img src="/images/logo.jpg" alt=""/>
                        </Link>
                    </div>
                    <ul className="navigation-list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        {/* <li>
                            <a href="#">My Posts</a>
                        </li>
                        <li>
                            <a href="#">Add Post</a>
                        </li> */}
                        <li>
                            <Link to="/contacts">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </header>
            
            <Switch>
                <Route path="/" exact component={BlogList}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/about" component={About}/>
                <Route path="/contacts" component={Contacts}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/post/:id" component={SinglePost}/>
            </Switch>
        </Router>
    )
}

export default Navigation;