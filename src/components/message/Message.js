import React from "react";
import './Message.css';

const Message = ({text, key}) => {
    return (
        <span className="message" key={key}>
      {text}
    </span>
    );
};

export default Message;
