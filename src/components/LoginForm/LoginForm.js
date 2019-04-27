// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { PureComponent } from 'react';
import { withAuth } from '../../context/Auth';
import styles from './LoginForm.module.css';
import cx from 'classnames';

function LoginForm({ authorize, isAuthorized }) {
  return (
    <div className={styles.bg}>
      <div className={styles.form}>
        <p>
          <label htmlFor="email">
            <span className={styles.labelText}>Почта</span>
          </label>
          <input type="text" name="email" className={styles.input} />
        </p>
        <p>
          <label htmlFor="password">
            <span className={styles.labelText}>Пароль</span>
          </label>
          <input type="text" name="password" className={styles.input} />
        </p>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={authorize}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
