import React, { Component } from 'react';
import Message from '../Message/Message';
import './Chat.css';

class Chat extends Component {
  state = {
    messageInput: '',
    messages: []
  };

  changeInputMessage = e => {
    this.setState({ messageInput: e.target.value });
  };

  sendMessageOnEnter = e => {
    if (e.key === 'Enter' && this.state.messageInput) {
      this.setState(({ messageInput, messages }) => ({
        messageInput: '',
        messages: [...messages, { text: messageInput }]
      }));
    }
  };

  render() {
    const { messages, messageInput } = this.state;

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
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
