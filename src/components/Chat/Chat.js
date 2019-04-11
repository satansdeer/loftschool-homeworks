import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], messageInput: '' };
    this.changeInputMessage = this.changeInputMessage.bind(this);
    this.sendMessageOnEnter = this.sendMessageOnEnter.bind(this);
    this.eachMessage = this.eachMessage.bind(this);
  }

  changeInputMessage(event) {
    this.setState({ messageInput: event.target.value });
  }

  sendMessageOnEnter(event) {
    if (event.key === 'Enter') {
      this.setState(({ messages }) => {
        const newMessages = [...messages, { text: this.state.messageInput }];
        return {
          messages: newMessages,
          messageInput: ''
        };
      });
    }
  }

  eachMessage = msg => <Message key={msg.text} text={msg.text} />;

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map(this.eachMessage)}
          </div>
        </div>

        <input
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          value={this.state.messageInput}
        />
      </div>
    );
  }
}

export default Chat;
