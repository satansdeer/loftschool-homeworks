import React from 'react';
import './Message.css';

class Message extends React.Component {
  render() {
    return (
      <div className="message-list">
        <div className="messages">
          {messages.map(message, index => (
            <p>
              key={index} text={message.text}
            </p>
          ))}
        </div>
      </div>
    );
  }
}
