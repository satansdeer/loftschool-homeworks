import React, { Component } from 'react';
import styles from "./LoginForm.module.css";
import LoginTemp from "./LoginTemp"
import { withAuth, AuthProvider } from "../../context/Auth/Auth"
// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

export default class Login extends Component {
  state = {mail:'', password:''}

  changeEmail = event => {
    this.setState({ mail: event.target.value });
  }

  changePassword = event => {
    this.setState({ password: event.target.value });
  }

  render() {
    const Login = withAuth(LoginTemp);
    return (
      <AuthProvider>
        <div className={styles.bg}>
          <div className={styles.form} method="POST">
            <p>
              <label htmlFor="email" className={styles.labelText}>
                <span className="LoginForm_labelText__1L1gb">Почта</span>
              </label>
              <input type="text" name="email" className={styles.input} onChange={this.changeEmail} />
            </p>
            <p>
              <label htmlFor="password" className={styles.labelText}>
                <span className="LoginForm_labelText__1L1gb">Пароль</span>
              </label>
              <input type="password" name="password" className={styles.input} onChange={this.changePassword} />
            </p>
            <div className={styles.buttons}>
            <Login state={this.state}/>
            </div>
          </div>
        </div>
      </AuthProvider>
    );
  }
}