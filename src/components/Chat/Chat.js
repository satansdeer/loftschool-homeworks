import React, { Component } from 'react';
import Message from 'components/Message';
import './Chat.css';
class Chat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [],
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
			this.setState({
				messages: [ { text: this.state.messageInput } ],
				messageInput: ''
			});
			console.log(this.state.messages);
		}
	};

	render() {
		const listMessage = this.state.messages.map((item, index) => (
			<Message key={`${item.text}_${index}`} text={item.text} />
		));

		return (
			<div className="chat">
				<input
					type="text"
					className="input-message"
					onChange={this.changeInputMessage}
					onKeyPress={this.sendMessageOnEnter}
					value={this.state.messageInput}
				/>
				{listMessage}
			</div>
		);
	}
}

export default Chat;
