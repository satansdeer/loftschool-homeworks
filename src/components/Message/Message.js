import React from 'react';
import './Message.css';

const Message = ({ text }) => {
  return (
    <div>
      <span className="message">{text}</span>
    </div>
  );
};

export default Message;
