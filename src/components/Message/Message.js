import React from 'react';
import './Message.css';

const Message = ({ text }) => {
  return <span className="message">{text}</span>;
};

export default Message;
