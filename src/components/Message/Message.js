import React from 'react';

const Message = ({ text }) => {
  return (
    <div>
      <span className="message">{text}</span>
    </div>
  );
};

export default Message;
