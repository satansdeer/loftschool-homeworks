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
            this.setState({messages: this.state.messageInput });
            this.setState({messageInput:''});
        }
    }

    render() {
        return (
            <div className="chat">

                {/*<Message text='bla' messages={this.state.messages}/>*/}
                <input className="input-message" onChange={this.changeInputMessage}
                       onKeyDown={this.sendMessageOnEnter}></input>
            </div>
        )
    }
}
