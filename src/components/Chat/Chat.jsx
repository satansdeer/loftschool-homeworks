import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
  state = { messages: [], messageInput: '' };

  update = event => {
    this.setState({ messageInput: event.target.value });
  };

  handleSubmit = event => {
    const {messageInput} = this.state;

    if (event.key !== 'Enter' || this.state.messageInput === '') {
      retern;
    }
      this.setState(({messages, messageInput}) => {
      return (
        messages: [...messages, messageInput],
        messageInput: ''
      );
      });
  };
 
  render() {
    return (
      <div className="chat">
        <Message />

        <input
          className="input-message"
          type="text"
          value={this.state.messageInput}
          onChange={this.update}
          onKeyPress={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Chat;
