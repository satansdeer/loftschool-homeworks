import React, { Component } from 'react';
import './Message.css';

const Message = message => {
  return (
    <span className="message" key={message.text}>
      {message.text}
    </span>
  );
};

export default Message;
