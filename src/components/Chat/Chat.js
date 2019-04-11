import React from 'react';
import Message from '../Message';
import './Chat.css';

export default class Chat extends React.Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = event => {
    this.setState({ messageInput: event.target.value });
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
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
    const { messages } = this.state;
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
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}
