import React from "react";
import Message from "../Message"
import "./Chat.css"

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            messageInput: ''
        }
    }

    changeInputMessage = (e) => {
        this.setState({messageInput: e.target.value});
    }

    sendMessageOnEnter = (e) => {
        if (e.key === 'Enter') {
            if (e.target.value !== '') {
                let temp = this.state.messages;
                temp.push(e.target.value)
                this.setState({messages: temp});
                this.setState({messageInput: ''});
            }
        }
    }


    render() {
        return (
            <div className="chat">
                <div className="message__wrapper">
                    {this.state.messages.map((item, index) => (
                        <Message text={item} key={index}/>
                    ))}
                </div>
                <input className="input-message" onChange={this.changeInputMessage}
                       onKeyDown={this.sendMessageOnEnter} value={this.state.messageInput}></input>
            </div>
        )
    }
}
