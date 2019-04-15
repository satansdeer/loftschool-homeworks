import React, { Component } from 'react';
import './Message.css';
class Message extends Component {
	render() {
		return (
      <div className="message">
        <span className="message">{this.props.text}</span>
      </div>
    );
	}
}

export default Message;
