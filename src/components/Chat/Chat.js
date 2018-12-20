import React, { Component } from 'react';
import Message from '../Message/Message';
import './Chat.css';

export default class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };
  changeInputMessage = e => {
    //e.preventDefault();
    this.setState({ messageInput: e.target.value });
  };
  sendMessageOnEnter = e => {
    // e.preventDefault();
    const { messages, messageInput } = this.state;
    if (e.key === 'Enter') {
      this.setState({
        messages: [...messages, { text: messageInput }],
        messageInput: ''
      });
    }
  };
  render() {
    const { messages, messageInput } = this.state;
    return (
      <div className="chat">
        <div className="message-list">
          {messages.map(message => (
            <div key={message} className="messages">
              <Message text={message.text} />
            </div>
          ))}
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
