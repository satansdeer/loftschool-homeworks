import React, { PureComponent } from 'react';
import './CheckDoneButton.css';

const getStatus = parameter => (parameter ? '[x]' : '[ ]');

export const CheckDoneButton = ({ handleClick, isChecked }) => (
  <span className="todo-item__flag t-todo-complete-flag">
    {getStatus(isChecked)}
  </span>
);

CheckDoneButton.defaultProps = {
  handleClick: () => {
    console.log('click');
  },
  isChecked: false
};

export default CheckDoneButton;
