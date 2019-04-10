import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return (
      <li className="message-list-item">
        <span className="message">{this.props.text}</span>
      </li>
    );
  };
};
