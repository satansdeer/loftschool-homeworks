import React, { Component } from 'react';
// import InputField from '../InputField';
import './Form.css';
import imgBond from './assets/bond_approve.jpg';

export default class Form extends Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
    isValid: false
  }

  onChangeInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  onSubmit = e => {
    e.preventDefault();
    this.onValid();
  };
  onValid = e => {
    const { firstname, lastname, password} = this.state;

    if (firstname === 'james' && lastname === 'bond' && password === '007') {
      this.setState({ isValid: true });
      console.log('проверка прошла');
    } else {
      console.log('проверка не прошла');
    }
  }


  render() {
    const { firstname, lastname, password, isValid } = this.state;

    return (
      <div className="app-container">
        {isValid ? (
          <img src={imgBond} alt="bond approve" className="t-bond-image" />
        ) : (
          <form className="form" onSubmit={this.onSubmit}>
            <h1>Введите свои данные, агент</h1>

            <p className="field">
              <label htmlFor="firstname" className="field__label">
                <span className="field-label">Имя</span>
              </label>
              <input
                onChange={this.onChangeInput}
                type="text"
                value={firstname}
                name="firstname"
                className="field__input field-input t-input-lastname"
              />
              <span className="field__error field-error t-error-lastname" />
            </p>

            <p className="field">
              <label htmlFor="lastname" className="field__label">
                <span className="field-label">Фамилия</span>
              </label>
              <input
                onChange={this.onChangeInput}
                type="text"
                value={lastname}
                name="lastname"
                className="field__input field-input t-input-lastname"
              />
              <span className="field__error field-error t-error-lastname" />
            </p>

            <p className="field">
              <label htmlFor="password" className="field__label">
                <span className="field-label">Пароль</span>
              </label>
              <input
                onChange={this.onChangeInput}
                type="password"
                value={password}
                name="password"
                className="field__input field-input t-input-lastname"
              />
              <span className="field__error field-error t-error-lastname" />
            </p>

            <div className="form__buttons">
              <input
                type="submit"
                className="button t-submit"
                value="Проверить"
              />
            </div>
          </form>
        )}
      </div>
    );
  }
}
