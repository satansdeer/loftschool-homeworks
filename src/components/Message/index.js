import React, { Component } from 'react';
class Message extends Component {
	render() {
		const listMessage = this.props.message.map((item) => {
			return <span className="message">{item.text}</span>;
		});
		return <div>{listMessage}</div>;
	}
}

export default Message;
