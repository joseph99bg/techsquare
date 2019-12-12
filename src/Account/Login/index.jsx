import React from 'react'
import withForm from '../../shared/hocs/withForm';
import './style.css'

class Login extends React.Component {

    usernameChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordChangeHandler = this.props.controlChangeHandlerFactory('password');

    submitHandler = () => {
        const errors = this.props.getFormErrorState();
        if (!!errors) { return; }
        const data = this.props.getFormState();
        this.props.login(this.props.history, data);
    }

    render() {
        return(
            <div className="login-register-page">
                <h1>Login Page</h1>
                <form onSubmit={this.submitHandler}>
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
                    <button type="submit">Login</button>
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