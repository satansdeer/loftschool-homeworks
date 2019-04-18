import React from 'react';

class Message extends React.Component {
    state = {message: ""};
    update = event =>{
        this.setState({
            messageInput: event.target.value});
    }
    enter = event =>{
       if (event.key === 'Enter'){
        var t = e.messages,
        n=e.messageInput
        return {
            messages: [].concat(r(t),[{
                text:n
            }]),
            messageInput: ""
        }
       }
    }
  render() {
    return (
      <div className="message-list">
        <div className="messages" />
      </div>
          <input
      className="input-message"
      type="text"
      value = {this.state.message}
      onChange={this.update}
      onKeyPress={this.enter}/>
      );
  }
}

export { default } from './Message';
