import React from 'react';
import './CheckDoneButton.css';

const getStatus = parameter => (parameter ? '[x]' : '[ ]');

export const CheckDoneButton = ({ handleClick, done }) => (
  <span className="todo-item__flag t-todo-complete-flag" onClick={handleClick}>
    {getStatus(done)}
  </span>
);

CheckDoneButton.defaultProps = {
  handleClick: () => {
    console.log('click');
  },
  isChecked: false
};

export default CheckDoneButton;
