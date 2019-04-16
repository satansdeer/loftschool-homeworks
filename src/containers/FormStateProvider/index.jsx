import React, { Component } from 'react';
import formInsideFields from '../../appConfig';

const NAME_EMPTY_MESSAGE = 'Нужно указать имя';
const LASTNAME_EMPTY_MESSAGE = 'Нужно указать фамилию';
const PASSWORD_EMPTY_MESSAGE = 'Нужно указать пароль';
const NAME_WRONG_MESSAGE = 'Имя указано не верно';
const LASTNAME_WRONG_MESSAGE = 'Фамилия указана не верно';
const PASSWORD_WRONG_MESSAGE = 'Пароль указан не верно';

const VALID_NAME = 'james';
const VALID_LASTNAME = 'bond';
const VALID_PASSWORD = '007';

class FormStateProvider extends Component {
  constructor(props) {
    super(props);

    this.state = formInsideFields.reduce((accumulator, element, index) => {
      accumulator[element.name] = { value: '', error: null };
      return accumulator;
    }, {});
  }

  handleValidate = event => {
    event.preventDefault();
    const newState = { ...this.state };
    formInsideFields.forEach(
      ({ name }) =>
        (newState[name].error = this.validate(name, this.state[name].value))
    );

    const arrayOfValues = Object.values(newState).filter(
      ({ error }) => error === null
    );

    return arrayOfValues.length === 3
      ? this.props.setValidApp()
      : this.setState({ ...newState });
  };

  validate = (name, value) => {
    if (name === 'firstname') {
      if (!value) {
        return NAME_EMPTY_MESSAGE;
      }

      if (value !== VALID_NAME) {
        return NAME_WRONG_MESSAGE;
      }
    }

    if (name === 'lastname') {
      if (!value) {
        return LASTNAME_EMPTY_MESSAGE;
      }

      if (value !== VALID_LASTNAME) {
        return LASTNAME_WRONG_MESSAGE;
      }
    }

    if (name === 'password') {
      if (!value) {
        return PASSWORD_EMPTY_MESSAGE;
      }

      if (value !== VALID_PASSWORD) {
        return PASSWORD_WRONG_MESSAGE;
      }
    }

    return null;
  };

  changeField = (name, fieldValue) => {
    const result = { ...this.state };

    formInsideFields.forEach(({ name }) => (result[name].error = null));

    result[name].value = fieldValue;

    this.setState({ ...result });
  };

  render = () =>
    React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        handleValidate: this.handleValidate,
        changeField: this.changeField,
        fields: formInsideFields,
        stateOfFields: this.state
      })
    );
}

export default FormStateProvider;
