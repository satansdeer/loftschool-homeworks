import React from 'react';
import Message from '../Message';
import './Chat.css';

export default class Chat extends React.Component {
  messagesContainer = React.createRef();
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = e => this.setState({ messageInput: e.target.value });

  sendMessageOnEnter = e => {
    const { messageInput } = this.state;

    if (e.key !== 'Enter') {
      return;
    }

    if (messageInput === '') {
      return;
    }

    this.setState(({ messages, messageInput }) => {
      return {
        messages: [...messages, { text: messageInput }],
        messageInput: ''
      };
    });
  };

  componentDidUpdate() {
    this.messagesContainer.current.scrollIntoView({
      block: 'end'
    });
  }

  renderMessageList() {
    const { messages } = this.state;

    return messages.map((massage, index) => (
      <Message text={massage.text} key={index} />
    ));
  }

  render() {
    const { messageInput } = this.state;

    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages" ref={this.messagesContainer}>
            {this.renderMessageList()}
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
