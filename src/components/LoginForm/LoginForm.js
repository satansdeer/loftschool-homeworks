// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './LoginForm.module.css';
import { withAuth } from '../../context/Auth';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined
    };
  }

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  onSubmitForm = () => {
    const { email, password } = this.state;
    const { authorize } = this.props;

    authorize(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { isAuthorized, authError } = this.props;

    return isAuthorized ? (
      <Redirect to="/app" />
    ) : (
      <div className={styles.bg}>
        <div className={styles.form}>
          <p>
            <label htmlFor="email">
              <span className={styles.labelText}>Почта</span>
            </label>
            <input
              type="email"
              name="email"
              className={styles.input}
              value={email}
              onChange={this.onChangeEmail}
            />
          </p>
          <p>
            <label htmlFor="password">
              <span className={styles.labelText}>Пароль</span>
            </label>
            <input
              type="password"
              name="password"
              className={styles.input}
              value={password}
              onChange={this.onChangePassword}
            />
          </p>

          <p className={styles.error}>{authError}</p>

          <div className={styles.buttons}>
            <button className={styles.button} onClick={this.onSubmitForm}>
              Войти
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);
