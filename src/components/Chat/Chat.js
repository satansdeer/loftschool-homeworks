import React from 'react';
import Message from '../Message/Message';
import './Chat.css'

export default class Chat extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			messages: [],
			messageInput: ''
		}
	}

	sendMessageOnEnter = (e) => {
		if ( e.key === 'Enter' && this.state.messageInput !== '' ) {
			 this.setState({
      			messages: [...this.state.messages, {text: this.state.messageInput}],
      			messageInput: ''
    		});
		}
	}

	changeInputMessage = (e) => {
		this.setState({
			messageInput: e.target.value
		})
	}

	render() {
		return (
			<div className="chat">
				<div className="message-list">
				<div className="messages">
				{this.state.messages.map((message, index) => {
				        return <Message text={message.text} key={index} />
					})
				}
			</div>
			    
			    </div>
			<input value={this.state.messageInput} className="input-message" onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter} />
			</div>
			)
	}
}