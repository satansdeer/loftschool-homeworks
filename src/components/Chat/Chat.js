
import React, {Component} from "react";
import Message from "../Message/Message.js";

class Chat extends Component {
    state = { 
        messages: [], 
        messageInput: '',
        count: 0 
    };

    changeInputMessage = (event) => {
        this.setState({ messageInput: event.target.value });
    }

    sendMessageOnEnter = (event) => {
        if (event.key === 'Enter') {
            this.setState({ messages: [ ...this.state.messages, {
                text: this.state.messageInput
            }]});
            this.setState({ messageInput: '' });
        }
        
    }

    render() {
      const { messageInput, messages } = this.state;
      return (
        <div>
            <div className="chat">
                <input type="text" className="input-message" 
                value={messageInput}
                onChange={this.changeInputMessage}
                onKeyPress={this.sendMessageOnEnter}/>
            </div>
            <ul>
                {messages.map(({text}) => (
                    <li>
                        <Message text={text}/>
                    </li>  
                ))}
            </ul>
            
            
        </div>
      );
    }
  };

export default Chat;