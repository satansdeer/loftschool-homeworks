import React from 'react';
import './PlusButton.css';

export const PlusButton = ({ handleClick }) => (
  <span className="plus t-plus" onClick={handleClick}>
    +
  </span>
);

PlusButton.defaultProps = {
  handleClick: () => {
    console.log('click');
  }
};

export default PlusButton;
