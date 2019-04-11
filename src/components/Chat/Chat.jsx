import React, { Component } from 'react';
import Message from '../Message';

export default class Chat extends Component {
    state = {
        messages: [],
        messageInput: ''
    };

    get renderMessages() {
        return this.messages.map((message, index) => <Message text={message.text} key={index} />);
    }

    changeInputMessage = value => {
        this.setState({
            messageInput: value
        });
    }

    sendMessageOnEnter = key => {
        if (key !== 'Enter' || this.inputText === '') {
            return;
        }

        this.setState(prevState => ({
            messages: [...prevState.messages, { text: this.messageInput }],
            messageInput: '',
        }));
    }

    render() {
        return (
            <div className='chat'>
                <div className='message-list'>
                    <div className='messages'>
                        {this.renderMessages}    
                    </div>
                </div>
                
                <input type="text" className="input-message"
                    value={this.messageInput}
                    onChange={({ target: { value } }) => this.changeInputMessage(value)}
                    onKeyPress={({ key }) => this.sendMessageOnEnter(key)}
                />
            </div>
        );
    }
};
