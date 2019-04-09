import React from "react";
import './Chat.css'
import Message from '../Message'

class Chat extends React.Component {

    state = {
        messages: [],
        messageInput: ''

    }

    changeInputMessage = e => {
        this.setState({messageInput: e.target.value})
        
    }

    sendMessageOnEnter = e => {

        if (e.key === 'Enter') {
            this.setState((prevState => ({
                messages: [...prevState.messages, {text: this.state.messageInput}],
                messageInput: ''})
            ))
        }
    }

    render() {
        return <div className = 'chat'>
            <div className = 'message-list'>
                <div className = 'messages'>                
                    {this.state.messages.map((message,index) => (
                        <Message text ={message.text} key = {`${message.text}+${index}`}/>
                    ))}
                </div>
            </div>
            <input type ='text' className = 'input-message' value = {this.state.messageInput} onChange = {this.changeInputMessage} onKeyPress = {this.sendMessageOnEnter}></input>
        </div>
    }
  }

export default Chat;