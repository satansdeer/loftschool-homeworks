import React, { Component } from 'react';
import formInsideFields from '../../appConfig'

const NAME_EMPTY_MESSAGE = 'Нужно указать имя';
const LASTNAME_EMPTY_MESSAGE = 'Нужно указать фамилию';
const PASSWORD_EMPTY_MESSAGE = 'Нужно указать пароль';
const NAME_WRONG_MESSAGE = 'Имя указано не верно';
const LASTNAME_WRONG_MESSAGE = 'Фамилия указана не верно';
const PASSWORD_WRONG_MESSAGE = 'Пароль указан не верно';

class FormStateProvider extends Component {
  constructor(props){
    super(props)

    this.state = formInsideFields.reduce((accumulator, element, index, array) => {
      accumulator[element.name] = {value: '',error: null}
      return accumulator
    }, {}) 
  }

  handleValidate = event => {
    event.preventDefault();
    const newState = {...this.state}
    formInsideFields.forEach(({name}) => newState[name].error = this.validate(name, this.state[name].value))

    this.setState({...newState})
  };

  validate = (name, value) => {
    console.log('test validateName', name, value)

    if(name === 'Имя') {
      if(!value){
        return NAME_EMPTY_MESSAGE
      }

      return NAME_WRONG_MESSAGE
    }

    if(name === 'Фамилия') {
      if(!value){
        return LASTNAME_EMPTY_MESSAGE
      }

      return LASTNAME_WRONG_MESSAGE
    }

    if(name === 'Пароль') {
      if(!value){
        return PASSWORD_EMPTY_MESSAGE
      }

      return PASSWORD_WRONG_MESSAGE
    }
  }

  changeField = (name, fieldValue) => {
    const result = {...this.state}

    formInsideFields.forEach(({name}) => result[name].error = null)

    result[name].value = fieldValue

    this.setState({...result})
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
