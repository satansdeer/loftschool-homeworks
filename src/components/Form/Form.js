import React, { Component } from 'react';
import './Form.css';
import Field from '../Field';
import FormButton from '../FormButton';
import avatar from './assets/bond_approve.jpg';

const data = {
  firstname: 'james',
  lastname: 'bond',
  password: '007'
};

export default class Form extends Component {
  state = {
    isAuth: false,
    fields: [
      {
        name: 'firstname',
        label: 'Имя',
        labelGenitive: 'имя',
        labelPointer: 'указано',
        value: '',
        errorText: ''
        // validValue: 'james'
      },
      {
        name: 'lastname',
        label: 'Фамилия',
        labelGenitive: 'фамилию',
        labelPointer: 'указана',
        value: '',
        errorText: ''
        // validValue: 'bond'
      },
      {
        name: 'password',
        label: 'Пароль',
        labelGenitive: 'пароль',
        labelPointer: 'указан',
        value: '',
        errorText: ''
        // validValue: '007'
      }
    ]
  };

  //   const array = this.state.fields;
  updateFields = array => {
    // debugger;
    const { fields } = this.state;
    let newFields = [];
    fields.forEach(elField => {
      var valid = false;
      array.forEach(elForm => {
        if (elField.name === elForm.name) {
          newFields.push({
            name: elForm.name,
            label: elField.label,
            labelGenitive: elField.labelGenitive,
            labelPointer: elField.labelPointer,
            value: elForm.value,
            errorText: elForm.errorText
          });
          valid = true;
        }
      });

      if (!valid) {
        newFields.push({
          name: elField.name,
          label: elField.label,
          labelGenitive: elField.labelGenitive,
          labelPointer: elField.labelPointer,
          value: elField.value,
          errorText: ''
        });
      }
    });
    this.setState({ fields: newFields });
  };

  checkData = () => {
    const { fields } = this.state;
    let updateArray = [];
    var valid = true;
    fields.forEach(el => {
      //   debugger;

      if (el.value === '') {
        updateArray.push({
          name: el.name,
          value: el.value,
          errorText: `Нужно указать ${el.labelGenitive}`
        });
        valid = false;
      } else if (data[el.name] !== el.value) {
        updateArray.push({
          name: el.name,
          value: el.value,
          errorText: `${el.label} ${el.labelPointer} не верно`
        });
        valid = false;
      }
    });
    if (!valid) {
      this.updateFields(updateArray);
    } else {
      this.setState({ isAuth: true });
    }
  };

  render() {
    const { fields, isAuth } = this.state;

    if (isAuth) {
      return (
        <div className="app-container">
          <img src={avatar} alt="I\'m James Bond" className="t-bond-image" />
        </div>
      );
    } else {
      return (
        <div className="app-container">
          <form className="form">
            <h1>Введите свои данные, агент</h1>
            {fields.map(({ name, label, value, errorText }) => {
              return (
                <Field
                  name={name}
                  label={label}
                  value={value}
                  errorText={errorText}
                  key={name}
                  updateFields={this.updateFields}
                />
              );
            })}
            <FormButton fillds={fields} checkData={this.checkData} />
          </form>
        </div>
      );
    }
  }
}
