import React from 'react';
import FieldLabel from '../FieldLabel';

class Field extends React.Component {
  onChangeInput = e => {
    const { name, value } = e.target;
    const { updateFields } = this.props;
    let array = [];
    array.push({ name, value, textError: '' });
    updateFields(array);
  };

  render() {
    const { name, label, textError } = this.props;
    const type = name === 'password' ? 'password' : 'text';
    return (
      <div className="field">
        <FieldLabel name={name} label={label} />
        <input
          className={`field__input field-input t-input-${name}`}
          type={type}
          name={name}
          onChange={this.onChangeInput}
        />
        <span className={`field__error field-error t-error-${name}`}>
          {textError}
        </span>
      </div>
    );
  }
}
export default Field;
