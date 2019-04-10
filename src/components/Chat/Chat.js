import React, { Component } from 'react';
import Message from '../Message';
import './Chat.css';

export default class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = e => {
    this.setState({
      messageInput: e.target.value
    });
  };

  sendMessageOnEnter = e => {
    if (e.key === 'Enter') {
      this.setState(({ messages }) => {
        const newMessages = [...messages, { text: this.state.messageInput }];

        return {
          messages: newMessages,
          messageInput: ''
        };
      });
    }
  };

  render() {
    const { messages, messageInput } = this.state;

    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((message, index) => (
              <Message key={index} text={message.text} />
            ))}
          </div>
        </div>
        <input
          className="input-message"
          value={messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}
