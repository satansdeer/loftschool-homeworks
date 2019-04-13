import React, { Component } from 'react';
import Message from '../Message/Message';
import './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageInput: '',
      text: '',
      messages: []
    };
  }

  changeInputMessage = event => {
    let inputText = event.target.value ? event.target.value : '';
    this.setState({ messageInput: inputText });
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
      let msg = this.state.messageInput;
      console.log(this.state.messageInput, 'messageInput after add value');

      let messages = this.state.messages;
      console.log(this.state.messages, 'messages');

      messages.push({ text: msg });
      console.log(this.state.messages, 'messages after push');

      this.setState({
        messageInput: '',
        text: msg,
        messages: messages
      });

      console.log(this.state, 'state');

      event.target.value = '';
    }
  };

  render() {
    let messages = [];

    for (let i = 0, length = this.state.messages.length; i < length; i++) {
      messages.push(<Message key={i} text={this.state.messages[i].text} />);
    }

    return (
      <div className="chat">
        <ul className="message-list">{messages}</ul>
        <input
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
