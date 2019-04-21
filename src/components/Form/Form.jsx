import React from 'react';
import './Form.css';
import image from './assets/bond_approve.jpg';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      inputs: { firstName: '', lastName: '', password: '' },
      validations: {}
    };
  }

  handleValidationData = () => {
    let inputs = this.state.inputs;
    let validations = {};

    if (inputs['firstName'] !== 'james' && inputs['firstName'] !== '')
      validations['firstName'] = 'Имя указано не верно';
    if (inputs['lastName'] !== 'bond' && inputs['lastName'] !== '')
      validations['lastName'] = 'Фамилия указана не верно';
    if (inputs['password'] !== '007' && inputs['password'] !== '')
      validations['password'] = 'Пароль указан не верно';
    this.setState({ validations: validations });
    return validations;
  };
  handleValidationEmpty = validations => {
    let inputs = this.state.inputs;
    if (inputs['firstName'] === '')
      validations['firstName'] = 'Нужно указать имя';
    if (inputs['lastName'] === '')
      validations['lastName'] = 'Нужно указать фамилию';
    if (inputs['password'] === '')
      validations['password'] = 'Нужно указать пароль';
    this.setState({ validations: validations });
    return validations;
  };

  handleSubmit = event => {
    event.preventDefault();
    let validations = this.handleValidationData();
    validations = this.handleValidationEmpty(validations);

    let check =
      validations.firstName !== undefined ||
      validations.lastName !== undefined ||
      validations.password !== undefined
        ? false
        : true;

    this.setState({ check: check });
  };

  componentDidMount = () => {};

  inputOnChange = event => {
    let inputs = this.state.inputs;
    inputs[event.target.name] = event.target.value;
    this.setState({ inputs: inputs, validations: {} });
  };

  render() {
    return (
      <div className="app-container">
        {this.state.check ? (
          <img src={image} alt="bond approve" className="t-bond-image" />
        ) : (
          <form className="form">
            <h1>Введите свои данные, агент</h1>
            <p className="field">
              <label className="field__label" htmlFor="firstname">
                <span className="field-label">Имя</span>
              </label>
              <input
                className="field__input field-input t-input-firstname"
                value={this.state.inputs['firstName']}
                onChange={this.inputOnChange}
                type="text"
                name="firstName"
              />
              <span className="field__error field-error t-error-firstname">
                {this.state.validations['firstName']}
              </span>
            </p>
            <p className="field">
              <label className="field__label" htmlFor="lastName">
                <span className="field-label">Фамилия</span>
              </label>
              <input
                className="field__input field-input t-input-lastname"
                value={this.state.inputs['lastName']}
                onChange={this.inputOnChange}
                type="text"
                name="lastName"
              />
              <span className="field__error field-error t-error-lastname">
                {this.state.validations['lastName']}
              </span>
            </p>
            <p className="field">
              <label className="field__label" htmlFor="password">
                <span className="field-label" title="f">
                  Пароль
                </span>
              </label>
              <input
                className="field__input field-input t-input-password"
                value={this.state.inputs['password']}
                onChange={this.inputOnChange}
                type="password"
                name="password"
              />
              <span className="field__error field-error t-error-password">
                {this.state.validations['password']}
              </span>
            </p>
            <div className="form__buttons">
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="button t-submit"
              >
                Проверить
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default Form;
