// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../../context/Auth';
import styles from './LoginForm.module.css';
import classNames from 'classnames';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = () => {
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
              type="text"
              name="email"
              className={classNames(styles.input, 't-input-email')}
              value={email}
              onChange={this.onChange}
            />
          </p>
          <p>
            <label htmlFor="password">
              <span className={styles.labelText}>Пароль</span>
            </label>
            <input
              type="password"
              name="password"
              className={classNames(styles.input, 't-input-password')}
              value={password}
              onChange={this.onChange}
            />
          </p>
          {authError !== '' && <p className={styles.error}>{authError}</p>}
          <div className={styles.buttons}>
            <button
              className={classNames(styles.button, 't-login')}
              onClick={this.onSubmit}
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
