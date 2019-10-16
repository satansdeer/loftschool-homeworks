import React, { Component } from 'react';
// import InputField from '../InputField';
import './Form.css';
import imgBond from './assets/bond_approve.jpg';

export default class Form extends Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
    isValid: false,
    messageFirstname: '',
    messageLastname: '',
    messagePassword: ''
  };

  onChangeInput = e => {
    console.log(e.target.name);
    const { name, value } = e.target;
    this.setState({
      [name]: value.toLowerCase(),
      messageFirstname: '',
      messageLastname: '',
      messagePassword: ''
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.onValid();
  };
  onValid = e => {
    const { firstname, lastname, password } = this.state;

    if (firstname === 'james' && lastname === 'bond' && password === '007') {
      this.setState({ isValid: true });
      console.log('проверка прошла');
    } else {
      this.checkFirstname(firstname);
      this.checkLastname(lastname);
      this.checkPassword(password);
    }
  };
  checkFirstname = firstname => {
    if (firstname === '') {
      this.setState({
        messageFirstname: 'Нужно указать имя'
      });
    } else if (firstname !== 'james') {
      this.setState({
        messageFirstname: 'Имя указано не верно'
      });
    } else {
      this.setState({ messageFirstname: '' });
    }
  };
  checkLastname = lastname => {
    if (lastname === '') {
      this.setState({
        messageLastname: 'Нужно указать фамилию'
      });
    } else if (lastname !== 'bond') {
      this.setState({
        messageLastname: 'Фамилия указана не верно'
      });
    } else {
      this.setState({ messageLastname: '' });
    }
  };
  checkPassword = password => {
    if (password === '') {
      this.setState({
        messagePassword: 'Нужно указать пароль'
      });
    } else if (password !== '007') {
      this.setState({
        messagePassword: 'Пароль указан не верно'
      });
    } else {
      this.setState({ messagePassword: '' });
    }
  };
  render() {
    const {
      firstname,
      lastname,
      password,
      isValid,
      messageFirstname,
      messageLastname,
      messagePassword
    } = this.state;

    return (
      <div className="app-container">
        {isValid ? (
          <img src={imgBond} alt="bond approve" className="t-bond-image" />
        ) : (
          <form className="form" onSubmit={this.onSubmit}>
            <h1>Введите свои данные</h1>

            <p className="field">
              <label htmlFor="firstname" className="field__label">
                <span className="field-label">Имя</span>
              </label>
              <input
                onChange={this.onChangeInput}
                type="text"
                value={firstname}
                name="firstname"
                className="field__input field-input t-input-firstname"
              />
              <span className="field__error field-error t-error-firstname">
                {messageFirstname}
              </span>
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
              <span className="field__error field-error t-error-lastname">
                {messageLastname}
              </span>
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
                className="field__input field-input t-input-password"
              />
              <span className="field__error field-error t-error-password">
                {messagePassword}
              </span>
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
