import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

import styles from './LoginForm.module.css';

class LoginForm extends Component {
  render() {
    return (
      <div className={styles.bg}>
        <div className={`${styles.form} t-form`}>
          <p>hui</p>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);

// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
