import React, { Component } from 'react';
import Message from '../Message/Message';

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
    const {messages, messageInput} = this.state;
    if (e.key === 'Enter') {
      this.setState({messages: [...messages, {text: messageInput}], messageInput: ""});
    }
  };
  render() {
      const {messages, messageInput} = this.state;
    return (
      <div className="chat">
        <input
          type="text"
          className="input-message"
          value={messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
        {messages.map(message => <Message key={message} text={message.text} />)}
      </div>
    );
  }
}
