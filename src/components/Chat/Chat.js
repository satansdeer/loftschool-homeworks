
import React, {Component} from "react";
import Message from "../Message/Message.js";
import "./Chat.css";
class Chat extends Component {
    state = { 
        messages: [], 
        messageInput: ''
    }

    changeInputMessage = (event) => {
        const {value} = event.target;
        this.setState({ messageInput: value });
    }

    sendMessageOnEnter = (event) => {
        const { messageInput } = this.state;
        if (event.key === 'Enter' && messageInput !== '') {
            this.setState(
                {   
                    messages: [ ...this.state.messages, { text: messageInput}],
                    messageInput: ''
                }
            );
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
                <ul>
                    {messages.map(({text}) => (
                        <li>
                            <Message text={text}/>
                        </li>  
                    ))}
                </ul>
            </div>
        </div>
      );
    }
  };

export default Chat;