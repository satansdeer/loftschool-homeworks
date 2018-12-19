import React from 'react';
import Message from '../Message/Message';
import './Chat.css';

export default class Chat extends React.Component {
  state = { messageInput: '', messages: [] };

  changeInputMessage = event => {
    this.setState({
      messageInput: event.target.value
    });
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
      this.setState({
        messages: [...this.state.messages, { text: this.state.messageInput }],
        messageInput: ''
      });
    }
  };

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map(function(message, index) {
              return <Message key={index} text={message.text} />;
            })}
          </div>
        </div>
        <input
          className="input-message"
          type="text"
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}
