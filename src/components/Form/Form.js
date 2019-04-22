import React, { Component } from 'react';
import './Form.css';
import bond from './assets/bond_approve.jpg';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      password: '',
      isLoggedIn: false,
      firstnameError: '',
      lastnameError: '',
      passwordError: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value, //event.target.name - детектид имеено тот input на котором сработало данное событие и если имя атрибута совподает с именем в state, тогда записывает в данный стейт value данного input
      firstnameError: '',
      lastnameError: '',
      passwordError: ''
    });
  };

  validationFirstname = () => {
    if (!this.state.firstname) {
      this.setState({
        firstnameError: 'Нужно указать имя'
      });
    }
    if (this.state.firstname && this.state.firstname !== 'james') {
      this.setState({
        firstnameError: 'Имя указано не верно'
      });
    }
    if (this.state.firstname && this.state.firstname === 'james') {
      this.setState({
        firstnameError: ''
      });
    }
  };

  validationLastname = () => {
    if (!this.state.lastname) {
      this.setState({
        lastnameError: 'Нужно указать фамилию'
      });
    }
    if (this.state.lastname && this.state.lastname !== 'bond') {
      this.setState({
        lastnameError: 'Фамилия указана не верно'
      });
    }
    if (this.state.lastname && this.state.lastname === 'bond') {
      this.setState({
        lastnameError: ''
      });
    }
  };

  validationPassword = () => {
    if (!this.state.password) {
      this.setState({
        passwordError: 'Нужно указать пароль'
      });
    }
    if (this.state.password && this.state.password !== '007') {
      this.setState({
        passwordError: 'Пароль указан не верно'
      });
    }
    if (this.state.password && this.state.password === '007') {
      this.setState({
        passwordError: ''
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.firstname === 'james' && this.state.lastname === 'bond' && this.state.password === '007') {
      this.setState({
        isLoggedIn: true
      });
    }

    this.validationFirstname();
    this.validationLastname();
    this.validationPassword();
  };

  render() {
    let form;
    if (!this.state.isLoggedIn) {
      form = (
        <form className="form">
          <h1>Введите свои данные агент</h1>
          <p className="field">
            <label className="field__label" for="firstname">
              Имя
            </label>
            <input
              className="field__input field-input t-input-firstname"
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
            <span className="field__error field-error t-error-firstname">{this.state.firstnameError}</span>
          </p>
          <p className="field">
            <label className="field__label" for="lastname">
              Фамилия
            </label>
            <input
              className="field__input field-input t-input-lastname"
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
            />
            <span className="field__error field-error t-error-lastname">{this.state.lastnameError}</span>
          </p>
          <p className="field">
            <label className="field__label" for="password">
              Пароль
            </label>
            <input
              className="field__input field-input t-input-password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <span className="field__error field-error t-error-password">{this.state.passwordError}</span>
          </p>
          <div className="form__buttons">
            <input
              type="submit"
              className="button t-submit"
              value="Проверить"
              onClick={this.handleSubmit}
            />
          </div>
        </form>
      );
    } else {
      form = <img src={bond} alt="bond approve" className="t-bond-image" />;
    }

    return <div className="app-container">{form}</div>;
  }
}

export default Form;
