import React from 'react';
import './Form.css';
import img from './assets/bond_approve.jpg';

class Form extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
    isValid: false,
    errors: {
      firstname: '',
      lastname: '',
      password: ''
    }
  };

  changeInput = e => {
    let inputName = e.target.name;
    let obj = {};
    obj[inputName] = e.target.value;
    obj.errors = {
      firstname: '',
      lastname: '',
      password: ''
    };

    this.setState(obj);
  };

  checkFirstName = firstname => {
    let error;
    if (firstname === '') {
      error = 'Нужно указать имя';
    } else if (firstname !== '' && firstname !== 'james') {
      error = 'Имя указано не верно';
    } else if (firstname === 'james') {
      error = '';
    }
    return error;
  };

  checkLastName = lastName => {
    let error;
    if (lastName === '') {
      error = 'Нужно указать фамилию';
    } else if (lastName !== '' && lastName !== 'bond') {
      error = 'Фамилия указана не верно';
    } else if (lastName === 'bond') {
      error = '';
    }
    return error;
  };

  checkPassword = password => {
    let error;
    if (password === '') {
      error = 'Нужно указать пароль';
    } else if (password !== '' && password !== '007') {
      error = 'Пароль указан не верно';
    } else if (password === '007') {
      error = '';
    }
    return error;
  };

  handleSubmit = e => {
    e.preventDefault();

    let isValid = false;
    let errors = {};

    errors.firstname = this.checkFirstName(this.state.firstname);
    errors.lastname = this.checkLastName(this.state.lastname);
    errors.password = this.checkPassword(this.state.password);

    if (!errors.firstname && !errors.lastname && !errors.password)
      isValid = true;

    this.setState({
      isValid: isValid,
      errors: {
        firstname: errors.firstname,
        lastname: errors.lastname,
        password: errors.password
      }
    });
  };

  render() {
    if (this.state.isValid) {
      return (
        <div className="app-container">
          <img className="t-bond-image" src={img} alt="bond approve" />
        </div>
      );
    }

    return (
      <div className="app-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>Введите свои данные, агент</h1>
          <p className="field">
            <label className="field__label" htmlFor="firstname">
              <span className="field-label">Имя</span>
            </label>
            <input
              className="field__input field-input t-input-firstname"
              type="text"
              name="firstname"
              onChange={this.changeInput}
              value={this.state.firstname}
            />
            <span className="field__error field-error t-error-firstname">
              {this.state.errors.firstname}
            </span>
          </p>
          <p className="field">
            <label className="field__label" htmlFor="lastname">
              <span className="field-label">Фамилия</span>
            </label>
            <input
              className="field__input field-input t-input-lastname"
              type="text"
              name="lastname"
              onChange={this.changeInput}
              value={this.state.lastname}
            />
            <span className="field__error field-error t-error-lastname">
              {this.state.errors.lastname}
            </span>
          </p>
          <p className="field">
            <label className="field__label" htmlFor="password">
              <span className="field-label">Пароль</span>
            </label>
            <input
              className="field__input field-input t-input-password"
              type="text"
              name="password"
              onChange={this.changeInput}
              value={this.state.password}
            />
            <span className="field__error field-error t-error-password">
              {this.state.errors.password}
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
      </div>
    );
  }
}

export default Form;
