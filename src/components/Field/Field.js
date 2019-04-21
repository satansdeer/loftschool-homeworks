import React, { Component } from 'react';
import FieldLabel from '../FieldLabel';

export default class Field extends Component {
  render() {
    const { name, label, errorText } = this.props;

    return (
      <p className="field">
        <FieldLabel name={name} label={label} />
        <input
          type="text"
          className={`field__input field-input t-input-${name}`}
          name={name}
        />
        <span className={`field__error field-error t-error-${name}`}>
          {errorText}
        </span>
      </p>
    );
  }
}
