import React, { Component } from 'react';
import Message from '../Message';
import './Chat.test';

const empty = '';
class Chat extends Component {
  state = { messages: [], messageInput: empty };
  messageList = React.createRef();

  changeInputMessage = event => {
    this.setState({ messageInput: event.target.value });
  };

  sendMessageOnEnter = event => {
    if (event.key !== 'Enter' || event.value === empty) return;

    this.setState(({ messages, messageInput }) => {
      return {
        messages: [...messages, { text: messageInput }],
        messageInput: empty
      };
    });
  };

  componentDidUpdate = () => {
    this.messageList.current.scrollIntoView({ block: 'end' });
  };

  renderMessages() {
    const { messages } = this.state;
    return messages.map((message, index) => {
      return <Message text={message.text} key={index} />;
    });
  }

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div ref={this.messageList} className="messages">
            {this.renderMessages()}
          </div>
          <input
            className="input-message"
            onChange={this.changeInputMessage}
            onKeyPress={this.sendMessageOnEnter}
            value={this.messageInput}
          />
        </div>
      </div>
    );
  }
}

export default Chat;
