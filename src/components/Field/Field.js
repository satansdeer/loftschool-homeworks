import React, { Component } from 'react';
import FieldLabel from '../FieldLabel';

export default class Field extends Component {
  onChange = event => {
    const { name, value } = event.target;
    const { updateFields } = this.props;
    let array = [];
    array.push({ name, value, textError: '' });
    updateFields(array);
  };

  render() {
    const { name, label, errorText } = this.props;
    const type = name === 'password' ? 'password' : 'text';

    return (
      <p className="field">
        <FieldLabel name={name} label={label} />
        <input
          className={`field__input field-input t-input-${name}`}
          name={name}
          type={type}
          onChange={this.onChange}
        />
        <span className={`field__error field-error t-error-${name}`}>
          {errorText}
        </span>
      </p>
    );
  }
}
