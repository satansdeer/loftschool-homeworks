import React from 'react';
import './Message.css';

const Message = props => {
    const { text } = props;
    return (
        <li className="message-item">
            <span className="message" >{text}</span>
        </li>
    );
}

export default Message;