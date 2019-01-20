import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../../context/Auth';
import style from './LoginForm.module.css';
import classNames from 'classnames';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }

    onHandleClick = () => {
        const { authorize } = this.props,
            { email, password } = this.state;

        authorize(email, password);
    }
    render() {
        const { isAuthorized, authError } = this.props;

        if (isAuthorized) {
            return <Redirect to='app' />
        } else {
            return (
                <div className={style.bg}>
                    <div className={classNames(style.form, 't-form')}>
                        <p>
                            <label htmlFor='email'>
                                <span className={style.labelText}>Почта</span>
                            </label>
                            <input
                                className={classNames(style.input, 't-input-email')}
                                onChange={this.handleChange}
                                type='text'
                                name='email'
                            />
                        </p>
                        <p>
                            <label htmlFor='password'>
                                <span className={style.labelText}>Почта</span>
                            </label>
                            <input
                                className={classNames(style.input, 't-input-password')}
                                onChange={this.handleChange}
                                type='text'
                                name='password'
                            />
                        </p>
                        {authError ? <p className={style.error} > {authError}</p> : null}

                        <div className={style.buttons}>
                            <button
                                className={classNames(style.button, 't-login')}
                                onClick={this.onHandleClick}>
                                Войти
                    </button>
                        </div>
                    </div>
                </div>
            )
        }


    }
}

export default withAuth(LoginForm);