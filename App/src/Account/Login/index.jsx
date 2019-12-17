import React from 'react'
import withForm from '../../shared/hocs/withForm';
import './style.css'

class Login extends React.Component {

    state = {
        error: null
    }

    usernameChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordChangeHandler = this.props.controlChangeHandlerFactory('password');

    submitHandler = () => {
        const errors = this.props.getFormErrorState();
        if (!!errors) { return; }
        const data = this.props.getFormState();
        this.props.login(this.props.history, data)
            .catch(err => {
                this.setState({
                    error: err
                })
            });
    }

    render() {
        const { error } = this.state;
        return(
            <div className="login-register-page">
                <h1>Login Page</h1>
                <form>
                    <div>
                        <label htmlFor='username'>Username:</label>
                        <input type="text"
                            onChange={this.usernameChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input type="password"
                            onChange={this.passwordChangeHandler} />
                    </div>
                    { error && <div className="error">{error}</div> }
                    <button type="button" onClick={this.submitHandler}>Login</button>
                </form>
            </div>
        )
    }
}

const initialFormState = {
    username: '',
    password: ''
}

export default withForm(Login, initialFormState)