import React from 'react';
import './InputComponent.css';

const InputComponent = props => {
  const {
    type,
    autocompleteOff,
    handleChange,
    handleKeyDown,
    value,
    dragOff,
    placeholder
  } = props;
  return (
    <input
      type={type}
      onChange={({ target: { value } }) => handleChange(value)}
      className="todo-input t-input"
      placeholder={placeholder}
      autoComplete={autocompleteOff && 'off'}
      onDrop={dragOff ? event => event.preventDefault() : null}
      value={value}
      onKeyDown={({ keyCode }) => handleKeyDown(keyCode)}
    />
  );
};

InputComponent.defaultProps = {
  type: 'text',
  autocompleteOff: true,
  handleChange: () => console.log('check'),
  handleKeyDown: () => console.log('check'),
  value: 'default value',
  dragOff: true,
  placeholder: 'Введите задачу'
};

export default InputComponent;
