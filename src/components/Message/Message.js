import React from 'react';
import './Message.css';

const Message = props => (
  <span className="message" key={props.id}>
    {props.text}
  </span>
);

export default Message;
