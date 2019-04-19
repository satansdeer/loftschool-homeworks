import React, { Component } from 'react';
import './Chat.css';
import Message from "../message";

class Chat extends Component {
    state = {
        messages: [],
        messageInput: ''
    };
    changeInputMessage = e => {
        this.setState({ messageInput: e.target.value });
    };

    sendMessageOnEnter = e => {
        if (e.key === 'Enter') {
            if (this.state.messageInput !== "") {
                this.setState({
                    messages: [...this.state.messages, {text: this.state.messageInput}],
                    messageInput: ''
                });
            }
        }
    };

    render() {
        const {messageInput, messages} = this.state;

        return (
            <div className="chat">
                <div className="message-list">

                    <div className="messages">
                        {messages.map((el, index) => (
                            <Message key={index} text={el.text} />
                        ))}
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

export default Chat;