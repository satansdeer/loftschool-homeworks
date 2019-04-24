// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { PureComponent } from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';
import styles from './LoginForm.module.css';
import AppRouter from '../AppRouter';
import cn from 'classnames';
class LoginForm extends PureComponent {
  state = {
    email: 'test@test.ru',
    password: '321'
  };

  onChangeEmail = event => {
    const { value } = event.target;
    this.setState({ email: value });
  };

  onChangePassword = event => {
    const { value } = event.target;
    this.setState({ password: value });
  };

  localAuthorize = () => {
    const { authorize } = this.props; 
    const { email, password } = this.state;
    authorize(email, password);
  }

  render() {
    const { isAuthorized, authError } = this.props;
    const { email, password } = this.state;
    return isAuthorized ? (
      <Redirect to="/app" component={AppRouter} />
    ) : (
      <div className={styles.bg}>
        <div className={cn(styles.form, 't-form')}>
          <p key="email">
            <label htmlFor="email">
              <span className={styles.labelText}>Почта</span>
            </label>
            <input
              type="text"
              name="email"
              className={cn(styles.input, 't-input-email')}
              value={email}
              onChange={this.onChangeEmail}
            />
          </p>
          <p key="password">
            <label htmlFor="password">
              <span className={styles.labelText}>Пароль</span>
            </label>
            <input
              type="password"
              name="password"
              className={cn(styles.input, 't-input-password')}
              value={password}
              onChange={this.onChangePassword}
            />
          </p>
          <p className={styles.error}>{authError}</p>
          <div className={styles.buttons}>
            <button
              className={cn(styles.button, 't-login')}
              onClick={this.localAuthorize}
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
