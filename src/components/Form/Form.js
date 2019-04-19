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
      isSubmit: false,
      isLoggedIn: false,
      error: [
        {
          firstname: ''
        },
        {
          lastname: ''
        },
        {
          password: ''
        }
      ]
    };
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
      [event.target.name]: event.target.value, //event.target.name - детектид имеено тот input на котором сработало данное событие и если имя атрибута совподает с именем в state, тогда записывает в данный стейт value данного input
      isSubmit: false,
      error: [
        {
          firstname: ''
        },
        {
          lastname: ''
        },
        {
          password: ''
        }
      ]
    });
  };

  validationFirstname = () => {
    let arrError = this.state.error;
    if (!this.state.firstname) {
      arrError[0].firstname = 'Нужно указать имя';
    }
    if (this.state.firstname && this.state.firstname !== 'James') {
      arrError[0].firstname = 'Имя указано не верно';
    }
    if (this.state.firstname && this.state.firstname === 'James') {
      arrError[0].firstname = '';
    }
  };

  validationLastname = () => {
    let arrError = this.state.error;
    if (!this.state.lastname) {
      arrError[1].lastname = 'Нужно указать фамилию';
    }
    if (this.state.lastname && this.state.lastname !== 'Bond') {
      arrError[1].lastname = 'Фамилия указана не верно';
    }
    if (this.state.lastname && this.state.lastname === 'Bond') {
      arrError[1].lastname = '';
    }
  };

  validationPassword = () => {
    let arrError = this.state.error;
    if (!this.state.password) {
      arrError[2].password = 'Нужно указать пароль';
    }
    if (this.state.password && this.state.password !== '007') {
      arrError[2].password = 'Пароль указан не верно';
    }
    if (this.state.password && this.state.password === '007') {
      arrError[2].password = '';
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isSubmit: true
    });

    if (this.state.firstname === 'James' && this.state.lastname === 'Bond' && this.state.password === '007') {
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
            <span className="field__error field-error t-error-firstname">
              {this.state.error[0].firstname}
            </span>
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
            <span className="field__error field-error t-error-lastname">
              {this.state.error[1].lastname}
            </span>
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
            <span className="field__error field-error t-error-password">
              {this.state.error[2].password}
            </span>
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
