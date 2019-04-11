import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
  state = { messages: [], messageInput: `` };

  changeInputMessage(e) {
    this.setState({ messageInput: e.target.value });
  }

  sendMessageOnEnter(e) {
    if (e.key === 'Enter') {
      this.setState({
        messages: this.state.messages.concat({ text: this.state.messageInput }),
        messageInput: ``
      });
    }
  }

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map((message, index) => (
              <Message key={index} text={message.text} />
            ))}
          </div>
        </div>
        <input
          className="input-message"
          onChange={this.changeInputMessage.bind(this)}
          onKeyPress={this.sendMessageOnEnter.bind(this)}
          value={this.state.messageInput}
        />
      </div>
    );
  }
}

export default Chat;
