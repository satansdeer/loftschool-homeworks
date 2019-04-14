import React, { Component } from 'react';
import Message from '../Message/Message';
import './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageInput: '',
      messages: []
    };
  }

  changeInputMessage = event => {
    let inputText = event.target.value ? event.target.value : '';
    this.setState({ messageInput: inputText });
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
      let { messages, messageInput } = this.state;

      if (messageInput) {
        this.setState({
          messageInput: '',
          messages: [...messages, { text: messageInput }]
        });
      }
    }
  };

  render() {
    let { messages, messageInput } = this.state;

    return (
      <div className="chat">
        <ul className="message-list">
          {messages.map((message, i) => (
            <Message key={i} text={message.text} />
          ))}
        </ul>
        <input
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          value={messageInput}
        />
      </div>
    );
  }
}

export default Chat;
