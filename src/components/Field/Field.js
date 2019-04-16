import React from 'react';

class Field extends React.Component {
  onChannge = event => {
    this.props.onChange(this.props.name, event.target.value);
  };

  get errorMessage() {
    let codError = this.props.error;
    let result = '';

    if (codError === 'required') {
      result = this.props.errorRequired || 'Нужно указать';
    } else if (codError === 'data') {
      result = this.props.errorData || 'Данные не верны';
    }

    return result;
  }

  render() {
    const { name, value, label, type } = this.props;
    let typeInput = type ? type : 'text';

    return (
      <p className="field">
        <label className="field__label" htmlFor={name}>
          <span className="field-label">{label}</span>
        </label>
        <input
          className={`field__input field-input t-input-${name}`}
          type={typeInput}
          name={name}
          defaultValue={value}
          onChange={this.onChannge}
        />
        <span className={`field__error field-error t-error-${name}`}>
          {this.errorMessage}
        </span>
      </p>
    );
  }
}

export default Field;
