import React from 'react';
import Message from 'components/Message';
import './Chat.css';

class Chat extends React.Component {
  state = { nMessage: 0, messageInput: '', messages: [] };

  changeInputMessage = e => {
    this.setState({ messageInput: e.target.value });
  };

  sendMessageOnEnter = e => {
    if (e.key === 'Enter') {
      // console.log(e);
      //V3
      this.setState(prevState => ({
        messageInput: '',
        messages: [...prevState.messages, { text: this.state.messageInput }]
      }));

      //V2
      // this.setState(prevState => ({
      //   nMessage: prevState.nMessage + 1,
      //   messageInput: '',
      //   messages: [
      //     ...prevState.messages,
      //     { id: this.state.nMessage, text: this.state.messageInput }
      //   ]
      // }));

      //V1
      // this.setState(
      //   prevState => ({
      //     messages: [
      //       ...prevState.messages,
      //       { id: this.state.nMessage, text: this.state.messageInput }
      //     ]
      //   }),
      //   () => {
      //     this.setState({
      //       nMessage: this.state.nMessage + 1,
      //       messageInput: ''
      //     });
      //   }
      // );
    }
  };

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map((message, index) => (
              //V3
              <Message key={message.text + index} text={message.text} />
              //V1, V2
              // <Message key={message.id} text={message.text} />
            ))}
          </div>
        </div>
        <input
          type="text"
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
