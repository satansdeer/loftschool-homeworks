// import React from 'react';
import React, { Componentы } from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
  state = {
    messageInput: '',
    messages: [{ text: messageInput }]
  };

  changeInputMessage = () => {
    // this.setState({
    //   messageInput: state.messageInput
    // });
  };
  sendMessageOnEnter = () => {
    this.setState({
      messages: [(text: messageInput.value)]
    });

    state.messageInput = '';
  };

  render() {
    const { messages, messageInput } = this.state;

    return (
      <div className="chat">
        <input
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          value={this.state.messageInput}
        />
        {messages.map((item, index) => (
          <Message text={item.text} key={`${new Date()}_${index}`} />
        ))}
      </div>
    );
  }
}

// const Chat = () => {
//   changeInputMessage = () => {};

//   return (
//     <div className="chat">
//       <input className="input-message" onChange={this.changeInputMessage} />
//     </div>
//   );
// };

export default Chat;
