import React, { Component } from 'react';
import { Message } from '../Message';

export class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = value => {
    this.setState({ ...this.state, messageInput: value });
  };

  sendMessageOnEnter = code => {
    const { messages, messageInput } = this.state;
    if (code === 13) {
      const newMessage = { text: messageInput };
      const newMessages = [...messages, newMessage];
      this.setState({ ...this.state, messages: newMessages });
    }
  };

  render() {
    const { messages } = this.state;
    return (
      <div className="chat">
        <input
          className="input-message"
          onChange={({ target: { value } }) => this.changeInputMessage(value)}
          onKeyDown={({ keyCode }) => this.sendMessageOnEnter(keyCode)}
        />
        {messages.map((item, index) => (
          <Message text={item.text} key={`${new Date()}_${index}`} />
        ))}
      </div>
    );
  }
}
