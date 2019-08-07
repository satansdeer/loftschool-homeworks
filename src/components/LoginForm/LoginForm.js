import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import styles from './LoginForm.module.css';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const { authorize } = this.props;
    const { email, password } = this.state;
    authorize(email, password);
  };

  renderForm = () => {
    const { authError } = this.props;
    const { email, password } = this.state;
    return (
      <div className={styles.bg}>
        <div className={classNames(styles.form, 't-form')}>
          <p>
            <label htmlFor="email">
              <span className={styles.labelText}>Почта</span>
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleInput}
              className={classNames(styles.input, 't-input-email')}
            />
          </p>
          <p>
            <label htmlFor="password">
              <span className={styles.labelText}>Пароль</span>
            </label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={this.handleInput}
              className={classNames(styles.input, 't-input-password')}
            />
          </p>
          {authError.length > 0 ? (
            <p className={styles.error}> {authError}</p>
          ) : null}

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
  };

  render() {
    const { isAuthorized } = this.props;
    return isAuthorized ? <Redirect to="/app" /> : this.renderForm();
  }
}

export default withAuth(LoginForm);

// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
