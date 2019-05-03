// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { PureComponent } from 'react';
import { withAuth } from '../../context/Auth';
import styles from './LoginForm.module.css';
import cx from 'classnames';

class LoginForm extends PureComponent {
  state = {
    mail: '',
    password: ''
  };

  login = event => {
    event.preventDefault();
    const { mail, password } = this.state;
    const { authorize } = this.props;
    authorize(mail, password);
  };

  handleChangeMail = event => {
    const { value } = event.target;
    this.setState({
      mail: value
    });
  };
  handleChangePassowd = event => {
    const { value } = event.target;
    this.setState({
      password: value
    });
  };
  render() {
    const { mail, password } = this.state;
    return (
      <div className={styles.bg}>
        <form className={styles.form} onSubmit={this.login}>
          <p>
            <label htmlFor="email">
              <span className={styles.labelText}>Почта</span>
            </label>
            <input
              type="text"
              name="mail"
              value={mail}
              className={styles.input}
              onInput={this.handleChangeMail}
            />
          </p>
          <p>
            <label htmlFor="password">
              <span className={styles.labelText}>Пароль</span>
            </label>
            <input
              type="text"
              name="passvord"
              value={password}
              className={styles.input}
              onInput={this.handleChangePassowd}
            />
          </p>
          <div className={styles.buttons}>
            <button type="submit" className={styles.button}>
              Войти
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withAuth(LoginForm);
