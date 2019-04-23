import React from 'react';
import InputComponent from '../../atoms/InputComponent';
import PlusButton from '../../atoms/PlusButton/index';
import './InputBox.css';

const InputBox = ({ value, handleChange, saveData, handleKeyDown }) => (
  <div className="todo-item todo-item-new">
    <InputComponent
      handleChange={handleChange}
      value={value}
      handleKeyDown={handleKeyDown}
    />
    <PlusButton handleClick={saveData} />
  </div>
);

InputBox.defaultProps = {
  value: 'test',
  handleChange: () => console.log('check'),
  handleClick: () => console.log('default click')
};

export default InputBox;
