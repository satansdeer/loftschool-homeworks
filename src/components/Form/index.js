import React, { Component } from 'react';
import './Form.css';
import Bond from './assets/bond_approve.jpg';

class Form extends Component {
  state = {
    rightFirtsName: 'James',
    rightLastName: 'Bond',
    rightPasvord: '007',
    firstName: '',
    lastName: '',
    passWord: '',
    errorFirstName: '',
    errorLastName: '',
    errorPassWord: '',
    firstNameRight: false,
    lastNameRight: false,
    passWord: false
  };

  handleChengeName = event => {
    const { value } = event.target;
    this.setState({
      firstName: value,
      errorFirstName: '',
      errorLastName: '',
      errorPassWord: ''
    });
  };

  handleChengeLastName = event => {
    const { value } = event.target;
    this.setState({
      lastName: value,
      errorFirstName: '',
      errorLastName: '',
      errorPassWord: ''
    });
  };

  handleChengePassword = event => {
    const { value } = event.target;
    this.setState({
      passWord: value,
      errorFirstName: '',
      errorLastName: '',
      errorPassWord: ''
    });
  };

  hendleSubmit = event => {
    event.preventDefault();
    const {
      rightFirtsName,
      rightLastName,
      rightPasvord,
      firstName,
      lastName,
      passWord,
      errorFirstName,
      errorLastName,
      errorPassWord
    } = this.state;

    if (firstName == '') {
      this.setState({
        errorFirstName: 'Нужно указать имя'
      });
    } else if (firstName != rightFirtsName) {
      this.setState({
        errorFirstName: 'Имя указано не верно'
      });
    } else {
      this.setState({
        firstNameRight: true,
        errorFirstName: ''
      });
    }
    if (lastName == '') {
      this.setState({
        errorLastName: 'Нужно указать фамилию'
      });
    } else if (lastName != rightLastName) {
      this.setState({
        errorLastName: 'Фамилия указана не верно'
      });
    } else {
      this.setState({
        lastNameRight: true,
        errorLastName: ''
      });
    }
    if (passWord == '') {
      this.setState({
        errorPassWord: 'Нужно указать пароль'
      });
    } else if (passWord != rightPasvord) {
      this.setState({
        errorPassWord: 'Пароль указан не верно'
      });
    } else {
      this.setState({
        passWordRight: true,
        errorPassWord: ''
      });
    }
  };

  render() {
    const {
      firstName,
      lastName,
      passWord,
      errorFirstName,
      errorLastName,
      errorPassWord,
      firstNameRight,
      lastNameRight,
      passWordRight
    } = this.state;

    if (
      firstNameRight === false ||
      lastNameRight === false ||
      passWordRight === false
    ) {
      return (
        <div className="app-container">
          <form className="form">
            <h1>Введите свои данные, агент</h1>
            <p className="field">
              <label htmlFor="firstname" className="field__label">
                <span className="field-label">Имя</span>
              </label>
              <input
                type="text"
                name="firstname"
                value={firstName}
                className="field__input field-input t-input-firstname"
                onChange={this.handleChengeName}
              />
              <span className="field__error field-error t-error-firstname">
                {errorFirstName}
              </span>
            </p>
            <p className="field">
              <label htmlFor="firstname" className="field__label">
                <span className="field-label">Фамилия</span>
              </label>
              <input
                type="text"
                name="lastname"
                value={lastName}
                className="field__input field-input t-input-lastname"
                onChange={this.handleChengeLastName}
              />
              <span className="field__error field-error t-error-lastname">
                {errorLastName}
              </span>
            </p>
            <p className="field">
              <label htmlFor="firstname" className="field__label">
                <span className="field-label">Пароль</span>
              </label>
              <input
                type="password"
                name="password"
                value={passWord}
                className="field__input field-input t-input-password"
                onChange={this.handleChengePassword}
              />
              <span className="field__error field-error t-error-password">
                {errorPassWord}
              </span>
            </p>
            <div className="form__buttons">
              <input
                type="submit"
                className="button t-submit"
                value="Проверить"
                onClick={this.hendleSubmit}
              />
            </div>
          </form>
        </div>
      );
    }

    if (
      firstNameRight === true &&
      lastNameRight === true &&
      passWordRight === true
    ) {
      return (
        <div className="app-container">
          <img src={Bond} alt="Bond" class="t-bond-image" />
        </div>
      );
    }
  }
}

export default Form;
