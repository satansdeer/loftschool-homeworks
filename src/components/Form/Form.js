import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import bond_approve from './assets/bond_approve.jpg';
import './Form.css';

class Form extends Component {
  state = {
    inputFirstname: '',
    inputLastname: '',
    inputPassword: ''
  };

  inputFirstnameChanged = e => {
    let value = e.target.value ? e.target.value : '';
    this.clearErrorSpans();

    this.setState({ inputFirstname: value });
  };

  inputLastnameChanged = e => {
    let value = e.target.value ? e.target.value : '';
    this.clearErrorSpans();

    this.setState({ inputLastname: value });
  };

  inputPasswordChanged = e => {
    let value = e.target.value ? e.target.value : '';
    this.clearErrorSpans();

    this.setState({ inputPassword: value });
  };

  inputButtonClicked = e => {
    e.preventDefault();

    let isFormValid = this.isFormValid();

    if (isFormValid) {
      ReactDOM.render(
        <div className="app-container">
          <img className="t-bond-image" alt="bond approve" src={bond_approve} />
        </div>,
        document.getElementById('root')
      );
    }
  };

  clearErrorSpans() {
    let firstnameErrorSpan = document.querySelector('.t-error-firstname');
    let lastnameErrorSpan = document.querySelector('.t-error-lastname');
    let passwordErrorSpan = document.querySelector('.t-error-password');

    firstnameErrorSpan.innerText = '';
    lastnameErrorSpan.innerText = '';
    passwordErrorSpan.innerText = '';
  }

  isFormValid() {
    let { inputFirstname, inputLastname, inputPassword } = this.state;
    let firstnameErrorSpan = document.querySelector('.t-error-firstname');
    let lastnameErrorSpan = document.querySelector('.t-error-lastname');
    let passwordErrorSpan = document.querySelector('.t-error-password');

    let isFirstnameValid = this.isInputValid(
      inputFirstname,
      firstnameErrorSpan,
      {
        validValue: 'James',
        noValueErr: 'Нужно указать имя',
        wrongValueErr: 'Имя указано не верно'
      }
    );

    let isLastnameValid = this.isInputValid(inputLastname, lastnameErrorSpan, {
      validValue: 'Bond',
      noValueErr: 'Нужно указать фамилию',
      wrongValueErr: 'Фамилия указана не верно'
    });

    let isPasswordValid = this.isInputValid(inputPassword, passwordErrorSpan, {
      validValue: '007',
      noValueErr: 'Нужно указать пароль',
      wrongValueErr: 'Пароль указан не верно'
    });

    if (isFirstnameValid && isLastnameValid && isPasswordValid) return true;
  }

  isInputValid(value, element, options) {
    let flag = false;

    if (!value) {
      element.innerText = options.noValueErr;
    } else if (value !== options.validValue) {
      element.innerText = options.wrongValueErr;
    } else {
      flag = true;
    }

    return flag;
  }

  render() {
    let { inputFirstname, inputLastname, inputPassword } = this.state;

    return (
      <div className="app-container">
        <form className="form">
          <h1>Введите свои данные, агент</h1>
          <p className="field">
            <label className="field__label" htmlFor="firstname">
              <span className="field-label">Имя</span>
            </label>
            <input
              className="field__input field-input t-input-firstname"
              type="text"
              name="firstname"
              value={inputFirstname}
              onChange={this.inputFirstnameChanged}
            />
            <span className="field__error field-error t-error-firstname" />
          </p>
          <p className="field">
            <label className="field__label" htmlFor="lastname">
              <span className="field-label">Фамилия</span>
            </label>
            <input
              className="field__input field-input t-input-lastname"
              type="text"
              name="lastname"
              value={inputLastname}
              onChange={this.inputLastnameChanged}
            />
            <span className="field__error field-error t-error-lastname" />
          </p>
          <p className="field">
            <label className="field__label" htmlFor="password">
              <span className="field-label">Пароль</span>
            </label>
            <input
              className="field__input field-input t-input-password"
              type="password"
              name="password"
              value={inputPassword}
              onChange={this.inputPasswordChanged}
            />
            <span className="field__error field-error t-error-password" />
          </p>
          <div className="form__buttons">
            <input
              type="submit"
              className="button t-submit"
              value="Проверить"
              onClick={this.inputButtonClicked}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
