import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <div className="card">
        <h3 className="card__title card-title">{title}</h3>
        <div className="card-scrollable-content">{children}</div>
      </div>
    );
  }
}

export default Card;
