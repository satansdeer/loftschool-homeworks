import React, { Component } from 'react';
import FieldLabel from '../FieldLabel';

class Field extends Component {
  render() {
    // const { name } = props;
    return (
      <p className="field">
        {/* <FieldLabel name={name} label={label} /> */}
        <FieldLabel />
        <input
          type="text"
          className="field__input field-input t-input-firstname"
          name="firstname"
          //   className="field__input field-input t-input-${name}"
          //   name={name}
        />
        <span className="field__error field-error t-error-firstname" />
        {/* <span className="field__error field-error t-error-${name}" /> */}
      </p>
    );
  }
}

export default Field;
