import React from 'react';
import FieldLabel from '../FieldLabel';

class Field extends React.Component {
  render() {
    return (
      <p className="field">
        {/* <FieldLabel name={name} label={label} /> */}
        <FieldLabel />
        <input
          type="text"
          className="field__input field-input t-input-firstname"
          name="firstname"
        />
        <span className="field__error field-error t-error-firstname" />
      </p>
    );
  }
}

export default Field;
