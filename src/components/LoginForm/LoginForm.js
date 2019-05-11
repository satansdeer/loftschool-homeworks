// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../../context/Auth';
import styles from './LoginForm.module.css'
import classNames from 'classnames';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    
    handleSubmit = () => {
        const { authorize } = this.props;
        const { email, password } = this.state;
        authorize(email, password);
    };

    render() {
        const { email, password } = this.state;
        const { isAuthorized, authError } = this.props;
    
        return isAuthorized ? (
            <Redirect to="/app" />
        ) : (
            <div className={styles.bg}>
                <div className={classNames(styles.form, 't-form')}>
                    <p>
                        <label htmlFor="email">
                            <span className={styles.labelText}>Почта</span>
                        </label>
                        <input
                            className={classNames(styles.input, 't-input-email')}
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="password">
                            <span className={styles.labelText}>Пароль</span>
                        </label>
                        <input
                            className={classNames(styles.input, 't-input-password')}
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </p>    
                    <>
                        {authError && <p className={styles.error}>{authError}</p>}
                    </>    
                    <div className={styles.buttons}>
                        <button
                            className={classNames(styles.button, 't-login')}
                            onClick={this.handleSubmit}
                        >
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
    
export default withAuth(LoginForm);
