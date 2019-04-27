import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../../context/Auth';
import styles from './LoginForm.module.css';

// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.
const LoginForm = ({ authorize, isAuthorized, authError }) => {
  const { bg, labelText, button, buttons, error, form, input } = styles;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const useAuthorize = () => authorize(email, password);

  const onChangeEmail = e => setEmail(e.target.value);
  const onChangePassword = e => setPassword(e.target.value);

  return isAuthorized ? (
    <Redirect to="/app" />
  ) : (
    <div className={bg}>
      <div className={`${form} t-form`}>
        <p>
          <label htmlFor="email">
            <span className={labelText}>Почта</span>
          </label>
          <input
            className={`${input} t-input-email`}
            type="text"
            name="email"
            value={email}
            onChange={onChangeEmail}
          />
        </p>
        <p>
          <label htmlFor="password">
            <span className={labelText}>Пароль</span>
          </label>
          <input
            className={`${input} t-input-password`}
            type="password"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
        </p>
        {isAuthorized ? '' : <p className={error}>{authError}</p>}
        <div className={buttons}>
          <button className={`${button} t-login`} onClick={useAuthorize}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};
// Когда пользователь авторизован - перенаправьте его на роут /app
export default withAuth(LoginForm);
