import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import styles from './LoginForm.module.css';
import { Redirect } from 'react-router-dom';

// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  updateState = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleButtonClick = () => {
    const { authorize } = this.props;
    const { email, password } = this.state;

    authorize(email, password);
  };

  render() {
    let { email, password } = this.state;
    const { isAuthorized, authError } = this.props;

    return isAuthorized ? (
      <Redirect to="/app" />
    ) : (
      <div className={styles.bg}>
        <div className={`${styles.form} t-form`}>
          <p>
            <label htmlFor="email">
              <span className={styles.labelText}>Почта</span>
            </label>
            <input
              type="text"
              name="email"
              className={`${styles.input} t-input-email`}
              value={email}
              onChange={this.updateState}
            />
          </p>
          <p>
            <label htmlFor="password">
              <span className={styles.labelText}>Пароль</span>
            </label>
            <input
              type="password"
              name="password"
              className={`${styles.input} t-input-password`}
              value={password}
              onChange={this.updateState}
            />
          </p>
          <p className={styles.error}>{authError}</p>
          <div className={styles.buttons}>
            <button
              className={`${styles.button} t-login`}
              onClick={this.handleButtonClick}
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
