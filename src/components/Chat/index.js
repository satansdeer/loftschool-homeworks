import React, { Component } from 'react';
import Message from 'components/Message';

class Chat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: [],
			messageInput: ''
		};
	}

	changeInputMessage = (event) => {
		this.setState({
			messageInput: event.target.value
		});
	};

	sendMessageOnEnter = (event) => {
		if (event.key === 'Enter') {
			let arrMessage = this.state.message;
			arrMessage.push({ text: this.state.messageInput });
			this.setState({
				message: arrMessage,
				messageInput: ''
			});
		}
	};

	render() {
		return (
			<div className="chat">
				<input
					type="text"
					className="input-message"
					onChange={this.changeInputMessage}
					onKeyPress={this.sendMessageOnEnter}
					value={this.state.messageInput}
				/>
				<Message message={this.state.message} />
			</div>
		);
	}
}

export default Chat;
