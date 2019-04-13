import React, { useState } from 'react';
import Message from '../Message/Message';
import './Chat.css';

const Chat = () => {

  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);

  const changeInputMessage = e => {
    setMessageInput(e.target.value);
  };

  const sendMessageOnEnter = e => {
    if (e.key === 'Enter' && messageInput) {
      setMessageInput('');
      setMessages([...messages, { text: messageInput }]);
    }
  };

    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((it, i) => (
              <Message key={i} text={it.text} />
            ))}
          </div>
        </div>
        <input
          type="text"
          className="input-message"
          value={messageInput}
          onChange={changeInputMessage}
          onKeyPress={sendMessageOnEnter}
        />
      </div>
    );
 };

export default Chat;
