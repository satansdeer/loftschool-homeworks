import React, { PureComponent } from 'react';
import ItemValue from '../ItemValue';
import CheckDoneButton from '../CheckDoneButton';
import './ToDoItem.css';

const ToDoItem = ({ value, handleClick }) => (
  <div className="todo-item t-todo">
    <ItemValue />
    <CheckDoneButton />
  </div>
);

ToDoItem.defaultProps = {
  value: 'test',
  handleClick: () => console.log('check')
};

export default ToDoItem;
