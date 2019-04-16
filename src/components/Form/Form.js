import './Form.css';
import React from 'react';
import Field from '../Field';
import FormButtons from '../FormButtons';
import logo from './assets/bond_approve.jpg';

const data = {
  firstname: 'james',
  lastname: 'bond',
  password: '007'
};

class Form extends React.Component {
  state = {
    authDone: false,
    fields: [
      {
        name: 'firstname',
        label: 'Имя',
        labelRod: 'имя',
        labelUk: 'указано',
        value: '',
        textError: ''
      },
      {
        name: 'lastname',
        label: 'Фамилия',
        labelRod: 'фамилию',
        labelUk: 'указана',
        value: '',
        textError: ''
      },
      {
        name: 'password',
        label: 'Пароль',
        labelRod: 'пароль',
        labelUk: 'указан',
        value: '',
        textError: ''
      }
    ]
  };

  updateFields = array => {
    const { fields } = this.state;
    let newFields = [];
    fields.forEach(elTo => {
      var fl = false;
      array.forEach(elFrom => {
        if (elTo.name === elFrom.name) {
          newFields.push({
            name: elFrom.name,
            label: elTo.label,
            labelRod: elTo.labelRod,
            labelUk: elTo.labelUk,
            value: elFrom.value,
            textError: elFrom.textError
          });
          fl = true;
        }
      });

      if (!fl) {
        newFields.push({
          name: elTo.name,
          label: elTo.label,
          labelRod: elTo.labelRod,
          labelUk: elTo.labelUk,
          value: elTo.value,
          textError: ''
        });
      }
    });
    this.setState({ fields: newFields });
  };

  checkData = () => {
    const { fields } = this.state;
    let updateArray = [];
    var fl = true;
    fields.forEach(el => {
      if (el.value === '') {
        updateArray.push({
          name: el.name,
          value: el.value,
          textError: `Нужно указать ${el.labelRod}`
        });
        fl = false;
      } else if (data[el.name] !== el.value) {
        updateArray.push({
          name: el.name,
          value: el.value,
          textError: `${el.label} ${el.labelUk} не верно`
        });
        fl = false;
      }
    });
    if (!fl) {
      this.updateFields(updateArray);
    } else {
      this.setState({ authDone: true });
    }
  };

  render() {
    const { fields, authDone } = this.state;

    if (authDone) {
      return (
        <div className="app-container">
          <img
            src={logo}
            alt="bond approve"
            className="t-bond-image"
          />
        </div>
      );
    } else {
      return (
        <div className="app-container">
          <div className="form">
            <h1>Введите свои данные, агент</h1>
            {fields.map(({ name, label, value, textError }) => {
              return (
                <Field
                  textError={textError}
                  name={name}
                  label={label}
                  key={name}
                  value={value}
                  updateFields={this.updateFields}
                />
              );
            })}
            <FormButtons fillds={fields} checkData={this.checkData} />
          </div>
        </div>
      );
    }
  }
}

export default Form;
