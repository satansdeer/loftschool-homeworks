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
			this.setState(({ messages, messageInput }) => ({
				messages: [ ...messages, { text: messageInput } ],
				messageInput: ''
			}));
		}
	};

	render() {
		const listMessage = this.state.messages.map((item, index) => (
			<Message key={`${item.text}_${index}`} text={item.text} />
		));

		return (
			<div className="chat">
				<div className="message-list">
					<div className="messages">{listMessage}</div>
				</div>
				<input
					type="text"
					className="input-message"
					onChange={this.changeInputMessage}
					onKeyPress={this.sendMessageOnEnter}
					value={this.state.messageInput}
				/>
			</div>
		);
	}
}

export default Chat;
