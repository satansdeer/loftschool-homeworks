import React, { Component } from 'react';
import Input from '../Partials/Input';
import ValidatorRule from '../Partials/Validator/ValidatorRule';
import ValidatorForm from '../Partials/Validator/ValidatorForm';
import Approved from './assets/bond_approve.jpg';

export default class Form extends Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
    showErrors: false,
    isApproved: false
  };

  handleFormSubmit = async (event, ValidatorForm) => {
    event.preventDefault();

    await this.setState({
      showErrors: true,
      isApproved: ValidatorForm.isFormValid()
    });
  };

  handleChange = async (value, Input) => {
    var newState = {
      showErrors: false
    };

    newState[Input.props.name] = value;
    await this.setState(newState);
  };

  render() {
    return (
      <div className="app-container">
        {this.state.isApproved && (
          <div className="t-bond-image">
            <img src={Approved} alt="bond_approve" />
          </div>
        )}

        {!this.state.isApproved && (
          <ValidatorForm onSubmit={this.handleFormSubmit} className="form">
            <h1>Введите свои данные, агент</h1>

            <p className="field">
              <label htmlFor="firstname" className="field__label">
                <span className="field-label">Имя</span>
              </label>

              <Input
                type={'text'}
                name="firstname"
                value={this.state.firstname}
                className={'t-input-firstname field-input field__input '}
                onChange={this.handleChange}
                validation={[
                  ValidatorRule.Create('required', 'Нужно указать имя'),
                  ValidatorRule.Create('eq:james', 'Имя указано не верно')
                ]}
                classError={'field__error field-error '}
                showErrors={this.state.showErrors}
              />
            </p>

            <p className="field">
              <label htmlFor="lastname" className="field__label">
                <span className="field-label">Фамилия</span>
              </label>

              <Input
                type={'text'}
                name="lastname"
                value={this.state.lastname}
                className={'t-input-lastname field-input field__input '}
                onChange={this.handleChange}
                validation={[
                  ValidatorRule.Create('required', 'Нужно указать фамилию'),
                  ValidatorRule.Create('eq:bond', 'Фамилия указана не верно')
                ]}
                classError={'field__error field-error '}
                showErrors={this.state.showErrors}
              />
            </p>

            <p className="field">
              <label htmlFor="password" className="field__label">
                <span className="field-label">Пароль</span>
              </label>

              <Input
                type={'password'}
                name="password"
                value={this.state.password}
                className={'t-input-password field-input field__input '}
                onChange={this.handleChange}
                validation={[
                  ValidatorRule.Create('required', 'Нужно указать пароль'),
                  ValidatorRule.Create('eq:007', 'Пароль указан не верно')
                ]}
                classError={'field__error field-error '}
                showErrors={this.state.showErrors}
              />
            </p>

            <div className="form__buttons">
              <button type="submit" className="t-submit button">
                Сохранить
              </button>
            </div>
          </ValidatorForm>
        )}
      </div>
    );
  }
}
