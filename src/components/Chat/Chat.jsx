import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
  state = {
    messageInput: '',
    messages: []
  };

  changeInputMessage = event => {
    this.setState({ messageInput: event.target.value });
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
      this.setState({
        messages: [...this.state.messages, { text: this.state.messageInput }]
      });
      this.setState({ messageInput: '' });
    }
  };

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map((message, index) => (
              <Message text={message.text} key={index} />
            ))}
          </div>
        </div>
        <input
          className="input-message"
          type="text"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          value={this.state.messageInput}
        />
      </div>
    );
  }
}

export default Chat;
