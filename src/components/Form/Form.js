import React from 'react';
import './Form.css';
import Field from '../Field';
import FormButton from '../FormButton';
import logo from './assets/bond_approve.jpg';

const data = {
  firstname: 'James',
  lastname: 'Bond',
  password: '007'
};

class Form extends React.Component {
  state = {
    isAuth: false,
    fields: [
      {
        name: 'firstname',
        label: 'Имя',
        errorText: ''
      },
      {
        name: 'lastname',
        label: 'Фамилия',
        errorText: ''
      },
      {
        name: 'password',
        label: 'Пароль',
        errorText: ''
      }
    ]
  };

  render() {
    const { fields, isAuth } = this.state;

    if (isAuth) {
      return (
        <div className="app-container">
          <img src={logo} alt="I\'m James Bond" className="t-bond-image" />
        </div>
      );
    } else {
      return (
        <div className="app-container">
          <form className="form">
            <h1>Введите свои данные, агент</h1>
            <p className="field">
              <label htmlFor="lastname" className="field__label">
                <span className="feild-label">Фамилия</span>
              </label>
              <input
                type="text"
                className="field__input field-input t-input-lastname"
                name="lastname"
              />
              <span className="field__error field-error t-error-lastname" />
            </p>

            <p className="field">
              <label htmlFor="password" className="field__label">
                <span className="feild-label">Пароль</span>
              </label>
              <input
                type="text"
                className="field__input field-input t-input-password"
                name="password"
              />
              <span className="field__error field-error t-error-firstname" />
            </p>
            <FormButton />
          </form>
        </div>
      );
    }
  }
}

export default Form;
