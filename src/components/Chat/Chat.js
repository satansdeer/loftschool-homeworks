import React, { Component } from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends Component {
  state = { messages: [], messageInput: '' };

  changeInputMessage = e => {
    this.setState({
      messageInput: e.target.value
    });
  };

  sendMessageOnEnter = e => {
    if (e.key === 'Enter' && this.state.messageInput) {
      const newItem = {
        text: this.state.messageInput
      };
      this.setState(({ messages }) => {
        const newArr = [...messages, newItem];
        return {
          messages: newArr,
          messageInput: ''
        };
      });
    }
  };
  render() {
    const messages = this.state.messages.map((item, index) => {
      return <Message key={index} text={item.text} />;
    });
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">{messages}</div>
        </div>

        <input
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          className="input-message"
          type="text"
          value={this.state.messageInput}
        />
      </div>
    );
  }
}
export default Chat;
