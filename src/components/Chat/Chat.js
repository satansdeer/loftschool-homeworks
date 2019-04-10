import React from 'react';
import './Chat.css';
import Message from '../Message';

class Chat extends React.Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = e => {
    const { value } = e.target;

    this.setState({ messageInput: value });
  };

  sendMessageOnEnter = e => {
    const { messageInput } = this.state;

    if (e.key === 'Enter' && messageInput !== '') {
      this.setState(prevState => ({
        messages: [...prevState.messages, { text: messageInput }],
        messageInput: ''
      }));
    }
  };

  render() {
    const { messages, messageInput } = this.state;
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((message, index) => (
              <Message text={message.text} key={`${message.text}+${index}`} />
            ))}
          </div>
        </div>
        <input
          type="text"
          className="input-message"
          value={messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
