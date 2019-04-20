import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
  state = { messages: [], messageInput: '' };

  update = event => {
    this.setState({ messageInput: event.target.value });
  };

  handleSubmit = event => {
    const { messageInput } = this.state;

    if (event.key !== 'Enter' || messageInput === '') {
      return;
    }
    this.setState(({ messages, messageInput }) => {
      return {
        messages: [...messages, { text: messageInput }],
        messageInput: ''
      };
    });
  };

  render() {
    const { messages, messageInput } = this.state;
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((message, index) => (
              <Message text={message.text} key={index} />
            ))}
          </div>
        </div>
        <input
          className="input-message"
          type="text"
          value={messageInput}
          onChange={this.update}
          onKeyPress={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Chat;
