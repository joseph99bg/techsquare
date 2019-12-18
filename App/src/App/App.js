import React from 'react';
import Navigation from '../Navigation';
import BlogList from '../Blog/List';
import SinglePost from '../Blog/SinglePost';
import CreatePost from '../Blog/CreatePost';
import EditPost from '../Blog/EditPost';
import Footer from '../Footer';
import Register from '../Account/Register';
import Login from '../Account/Login';
import Logout from '../Account/Logout';
import About from '../StaticPages/About';
import Contacts from '../StaticPages/Contacts';
import ErrorPage from '../StaticPages/ErrorPage';
import './App.css';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import userService from '../services/user-services';

function render(Cmp, otherProps) {
    return function (props) {
        return <Cmp {...props} {...otherProps} />
    };
  }

function parseCookeis() {
    return document.cookie.split('; ').reduce((acc, cookie) => {
        const [cookieName, cookieValue] = cookie.split('=');
        acc[cookieName] = cookieValue;
        return acc;
    }, {})
}

class App extends React.Component {

    constructor() {
        super();
        const cookies = parseCookeis();
        const isLogged = !!cookies['x-auth-cookie'];
        this.state = { isLogged };
    }

    logout = (history) => {
        userService.logout().then(() => {
            this.setState({ isLogged: false });
            history.push('/');
            return null;
        });
    }

    login = (history, data) => {
        return userService.login(data).then(() => {
            this.setState({ isLogged: true });
            history.push('/');
        });
    }

    render() {
        const { isLogged } = this.state;

        return (
            <BrowserRouter>
                <div className="App">
                    {/* <Loader local={true} isLoading={false} /> */}
                    <Navigation isLogged={isLogged} />
                    <div className="Container">
                        <Switch>
                            <Route path="/" exact><Redirect to="/posts"/></Route>
                            <Route key="posts" path="/posts" render={render(BlogList, { isLogged })}/>
                            <Route path="/post/:id" render={render(SinglePost, { isLogged })}/>
                            { isLogged && <Route key="my-posts" path="/my-posts" render={render(BlogList, { isLogged, myPosts: true })} /> }
                            { isLogged && <Route path="/add-post" component={CreatePost}/> }
                            { isLogged && <Route path="/edit-post/:id" component={EditPost}/> }

                            { !isLogged && <Route path="/register" component={Register}/> }
                            { !isLogged && <Route path="/login" render={render(Login, { isLogged, login: this.login })}/> }
                            { isLogged && <Route path="/logout" render={render(Logout, { isLogged, logout: this.logout })} /> }

                            <Route path="/about" component={About}/>
                            <Route path="/contacts" component={Contacts}/>
                            
                            <Route path="*" component={ErrorPage}/>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter >
        );
    }
}
export default App;