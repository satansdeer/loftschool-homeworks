import React from 'react';
import './ItemValue.css';

export const ItemValue = ({ value }) => (
  <p className="todo-item__text">{value}</p>
);

ItemValue.defaultProps = {
  value: '123123132123123'
};

export default ItemValue;
