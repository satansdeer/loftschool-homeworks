import React from 'react';
import './Message.css';

const Message = ({ text }) => <span className="message">{text}</span>;

Message.defaultProps = {
  text: 'default text'
};

export default Message;
