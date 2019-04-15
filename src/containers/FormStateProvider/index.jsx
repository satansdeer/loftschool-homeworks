import React, { Component } from 'react';

const NAME_EMPTY_MESSAGE = 'Нужно указать имя';
const NAME_WRONG_MESSAGE = 'Имя указано не верно';

class FormStateProvider extends Component {
  state = {
    name: {
      value: '',
      error: null
    },
    lastname: {
      value: '',
      error: null
    },
    password: {
      value: '',
      error: null
    }
  };

  handleValidate = event => {
    event.preventDefault();
    // const { name, surname, password } = this.state;
    console.log('test handleValidate');
    // if( !validateName && !validateSurname && !validatePassword) {
    //     this.
    // }
  };

  validateName = name => {
    if (name === '') return NAME_EMPTY_MESSAGE;

    if (typeof name !== 'string') return NAME_WRONG_MESSAGE;

    return null;
  };

  changeNameField = fieldValue => {
    console.log('fieldValue', fieldValue);

    this.setState({ ...this.state, name: { value: fieldValue, error: null } });
  };

  changeLastNameField = fieldValue => {
    console.log('fieldValue', fieldValue);

    this.setState({
      ...this.state,
      lastname: { value: fieldValue, error: null }
    });
  };

  changePasswordField = fieldValue => {
    console.log('fieldValue', fieldValue);

    this.setState({
      ...this.state,
      password: { value: fieldValue, error: null }
    });
  };

  render = () =>
    React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        handleValidate: this.handleValidate,
        changeNameField: this.changeNameField
      })
    );
}

export default FormStateProvider;
