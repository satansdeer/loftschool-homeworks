import React, { Component } from 'react';
import Message from 'components/Message/index.js';
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
    if (e.key === 'Enter') {
      this.setState({
        messages: [...this.state.messages, { text: this.state.messageInput }],
        messageInput: ''
      });
    }
  };

  render() {
    const msg = this.state.messages.map((el, index) => (
      <Message key={index} text={el.text} />
    ));
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">{msg}</div>
        </div>

        <input
          type="text"
          className="input-message"
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
