import React from 'react';
import ReactDOM from 'react-dom';
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
		if ( e.key === 'Enter' && e.target.value !== '' ) {
			 this.setState({
      			messages: [...this.state.messages, this.state.messageInput],
      			messageInput: ''
    		});
		}
		console.log(this.state.messages)
	}

	renderMessages() {
		return Object.keys(this.state.messages).map(message => {
			return (
				<div>{message}</div>
				);
		})
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
				        <Message  text={this.state.messages} />
			    </div>
			    </div>
			<input value={this.state.messageInput} className="input-message" onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter} />
			</div>
			)
	}
}