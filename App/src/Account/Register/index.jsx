import React from 'react'
import * as yup from 'yup';
import './style.css'
import userService from '../../services/user-services'
import withForm from '../../shared/hocs/withForm'

class Register extends React.Component {

    usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username')
    emailOnChangeHandler = this.props.controlChangeHandlerFactory('email')
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password')
    repeatPasswordOnChangeHandler = this.props.controlChangeHandlerFactory('repeatPassword')

    submitHandler = (event) => {
        event.preventDefault();
        const errors = this.props.getFormErrorState();
        if (!!errors) { return; }

        const data = this.props.getFormState();
        userService.register(data).then(() => {
            this.props.history.push('/login');
        });
    }

    getFirstControlError = name => {
        const errorState = this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    };

    render() {
        const usernameError = this.getFirstControlError('username');
        const emailError = this.getFirstControlError('email');
        const passwordError = this.getFirstControlError('password');
        const repeatPasswordError = this.getFirstControlError('repeatPassword');

        console.log(this.props.getFormState());

        return (
            <div className="login-register-page">
                <h1>Register Page</h1>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor='username'>Username:</label>
                        <input type="text"
                            onChange={this.usernameOnChangeHandler} />
                        {usernameError && <div className="error">{usernameError}</div>}
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type="email"
                            onChange={this.emailOnChangeHandler} />
                        {emailError && <div className="error">{emailError}</div>}
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input type="password"
                            onChange={this.passwordOnChangeHandler} />
                        {passwordError && <div className="error">{passwordError}</div>}
                    </div>
                    <div>
                        <label htmlFor='repeatPassword'>Repeat Password:</label>
                        <input type="password"
                            onChange={this.repeatPasswordOnChangeHandler} />
                        {repeatPasswordError && <div className="error">{repeatPasswordError}</div>}
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

const initialFormState = {
    username: '',
    email: '',
    password: '',
    repeatPassword: ''
}

const schema = yup.object({
    username: yup.string('Username must be a string')
        .required('Username is required')
        .min(4, 'Username must be more than 4 chars'),

    email: yup.string('Email must be a string')
        .required('Email is required'),

    password: yup.string('Password must be a string')
        .required('Password is required')
        .min(6, 'Password must be more than 6 chars'),

    repeatPassword: yup.string('Repeat Password must be a string')
        // .oneOf([yup.ref('password'), ''], 'Passwords don\'t match')
        .required('Repeat Password is required')
        .min(6, 'Password must be more than 6 chars')
});

export default withForm(Register, initialFormState, schema)