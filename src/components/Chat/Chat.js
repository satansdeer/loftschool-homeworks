import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageInput: ''
    };
  }

  changeInputMessage(event) {
    this.setState({ messageInput: event.target.value });
  }

  sendMessageOnEnter(event) {
    if (event.key === 'Enter') {
      this.setState({
        messages: this.state.messages.concat([
          { text: this.state.messageInput }
        ])
      });
    }
  }

  render() {
    return (
      <div className="chat">
        <input
          onChange={this.changeInputMessage.bind(this)}
          onKeyPress={this.sendMessageOnEnter.bind(this)}
          value={this.state.messageInput}
          className="input-message"
        />

        {this.state.messages.map((item, index) => (
          <Message text={item.text} key={index} />
        ))}
      </div>
    );
  }
}

export default Chat;
