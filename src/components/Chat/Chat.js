import React, { Component } from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends Component {
  state = { messages: [], messageInput: '' };

  changeInputMessage = e => {
    const {value} = e.target
    this.setState({
      messageInput: value
    });
  };

  sendMessageOnEnter = e => {
    const { messageInput, messages } = this.state;
    if (e.key === 'Enter' && messageInput !== '') {
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
          <div className="messages">
            {messages.map((item, index) => {
              return (
                <Message key={`${item.text}_${index}`} text={item.text} />
              );
            })}
          </div>
        </div>

        <input
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          className="input-message"
          type="text"
          value={messageInput}
        />
      </div>
    );
  }
}
export default Chat;
