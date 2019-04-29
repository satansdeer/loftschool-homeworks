import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../../context/Auth';
import classnames from 'classnames';
import styles from './LoginForm.module.css';

class LoginForm extends PureComponent {
  state = {
    email: '',
    password: ''
  };

  onEmailChange = e => {
    const {
      target: { value }
    } = e;

    this.setState({
      email: value
    });
  };

  onPasswordChange = e => {
    const {
      target: { value }
    } = e;

    this.setState({
      password: value
    });
  };

  onLoginClick = e => {
    const { email, password } = this.state;
    const { authorize } = this.props;
    authorize(email, password);
  };

  renderAuthForm = () => {
    const { email, password } = this.state;
    const { authError } = this.props;

    return (
      <div className={styles.bg}>
        <div className={classnames(styles.form, 't-form')}>
          <p>
            <label htmlFor="email">
              <span className={styles.labelText}>Почта</span>
            </label>
            <input
              type="text"
              name="email"
              className={classnames(styles.input, 't-input-email')}
              value={email}
              onChange={this.onEmailChange}
            />
          </p>
          <p>
            <label htmlFor="password">
              <span className={styles.labelText}>Пароль</span>
            </label>
            <input
              type="password"
              name="password"
              className={classnames(styles.input, 't-input-password')}
              value={password}
              onChange={this.onPasswordChange}
            />
          </p>
          {authError && <p className={styles.error}>{authError}</p>}
          <div className={styles.buttons}>
            <button className={classnames(styles.button, 't-login')} onClick={this.onLoginClick}>Войти</button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { isAuthorized } = this.props;
    return isAuthorized ? <Redirect to="/app" /> : this.renderAuthForm();
  }
}

export default withAuth(LoginForm);

// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
