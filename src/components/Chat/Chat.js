import React from 'react'
import Message from '../Message/Message'
import './Chat.css'

class Chat extends React.Component {
    state = {
        messageInput: '',
        messages: []
    };

    changeInputMessage = e => {
        this.setState({
            messageInput: e.target.value
        })
    };

    sendMessageOnEnter = e => {
        if (e.key === 'Enter' && e.target.value !== '') {
            this.setState({
                messages: [...this.state.messages, { text: this.state.messageInput }],
                messageInput: ''
            })
        }
    };

    render() {
        return (
            <div className='chat'>
                <div className='message-list'>
                    <div className='messages'>
                        {this.state.messages.map((message, i) => (
                            <Message key={i} text={message.text} />
                        ))}
                    </div>
                </div>
                <input
                    type='text'
                    className='input-message'
                    value={ this.state.messageInput }
                    onChange={ this.changeInputMessage }
                    onKeyPress= { this.sendMessageOnEnter }
                />
            </div>
        )
    }
}

export default Chat