import React, { Component } from 'react';
import FieldLabel from '../FieldLabel';

class Field extends Component {
  render() {
    const { name, label, textError } = this.props;

    return (
      <p className="field">
        <FieldLabel name={name} label={label} />
        <input
          type="text"
          className={`field__input field-input t-input-${name}`}
          name={name}
        />
        <span className={`field__error field-error t-error-${name}`} />
        {textError}
      </p>
    );
  }
}

export default Field;
