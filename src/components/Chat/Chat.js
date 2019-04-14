// import React from 'react';
import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = event => {
    const inputText = event.target.value ? event.target.value : '';

    this.setState({ messageInput: inputText });
  };

  sendMessageOnEnter = event => {
    const { messages, messageInput } = this.state;

    if (event.key === 'Enter' && event.target.value) {
      this.setState({
        messages: [...messages, { text: messageInput }],
        messageInput: ''
      });
    }
  };

  render() {
    const { messages, messageInput } = this.state;

    return (
      <div className="chat">
        <input
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          value={messageInput}
        />
        <div className="message-list">
          <div className="messages">
            {messages.map((message, index) => (
              <Message text={message.text} key={`${new Date()}_${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
