import React from 'react';
import './App.css';
import Navigation from '../Navigation/navigation';
import BlogList from '../Blog/List';
import SinglePost from '../Blog/SinglePost';
import CreatePost from '../Blog/CreatePost';
import EditPost from '../Blog/EditPost';
import Footer from '../Footer/footer';
import Register from '../Account/Register';
import Login from '../Account/Login';
import Logout from '../Account/Logout';
import Profile from '../Account/Profile';
import About from '../StaticPages/About';
import Contacts from '../StaticPages/Contacts';
// import Profile from '../Profile/Profile';
// import NotFound from '../NotFound/NotFound';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import userService from '../services/user-services';

// const Profile = React.lazy(() => import('../Profile/Profile'));

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
        userService.login(data).then(() => {
            this.setState({ isLogged: true });
            history.push('/posts');
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
                            <Route path="/posts" component={render(BlogList, { isLogged })}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/login" render={render(Login, { isLogged, login: this.login })}/>
                            <Route path="/logout" render={render('Logout', Logout, { isLogged, logout: this.logout })} />
                            <Route path="/about" component={About}/>
                            <Route path="/contacts" component={Contacts}/>
                            <Route path="/profile" component={Profile}/>
                            <Route path="/post/:id" component={SinglePost}/>
                            <Route path="/add-post" component={CreatePost}/>
                            <Route path="/edit-post/:id" component={EditPost}/>
                        </Switch>
                    </div>
                    {/* <Footer isLogged={isLogged} /> */}
                    <Footer />
                </div>
            </BrowserRouter >
        );
    }
}
export default App;