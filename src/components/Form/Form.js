import React, { Component } from 'react';
import './Form.css';
import Field from '../Field';
import FormButtons from '../FormButtons';
import logo from './assets/bond_approve.jpg';

// const data = {
//   firstname: 'james',
//   lastname: 'bond',
//   password: '007'
// };

export default class Form extends Component {
  state = {
    isAuth: false,
    fields: [
      {
        name: 'firstname',
        label: 'Имя',
        value: '',
        errorText: '',
        validValue: 'james'
      },
      {
        name: 'lastname',
        label: 'Фамилия',
        value: '',
        errorText: '',
        validValue: 'bond'
      },
      {
        name: 'password',
        label: 'Пароль',
        value: '',
        errorText: '',
        validValue: '007'
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
            {fields.map(({ name, label, value, errorText }) => {
              return (
                <Field
                  name={name}
                  label={label}
                  value={value}
                  errorText={errorText}
                  key={name}
                />
              );
            })}

            {/* <p className="field">
              <Field />
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
            </p> */}
            <FormButtons />
          </form>
        </div>
      );
    }
  }
}
