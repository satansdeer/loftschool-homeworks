import React, { Component } from 'react';
import './Message.css';

const Message = props => {
  return (
    <span className="message" key={props.text}>
      {props.text}
    </span>
  );
};

export default Message;
