import React, { Component } from 'react';
import Message from './../Message';
//import Message from 'components/Message';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            messageInput: ''
        };
        this.changeInputMessage = this.changeInputMessage.bind(this);
        this.sendMessageOnEnter = this.sendMessageOnEnter.bind(this);
    }    
    changeInputMessage = (e) => {
        this.setState({ messageInput: e.target.value });
    };
    sendMessageOnEnter = (e) => {        
        if (e.key === 'Enter') {
            console.log('Enter');
            var joined = this.state.messages.concat({ 'text': this.state.messageInput });
            this.setState({                
                messages: joined,
                messageInput: ''
            });
        }        
    };
    renderMessages() {
        console.log('renderMessages');
        return this.state.messages.map((item, index) => (
            <Message text={item.text} key={index}></Message>
        ));            
    }
    render() {
        return (
            <div className="chat">
                <div className="message-list">
                    {this.renderMessages()}
                </div>                
                <input className="input-message"
                    value={this.state.messageInput}
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter} />
            </div>
        );
    }
}

export default Chat;