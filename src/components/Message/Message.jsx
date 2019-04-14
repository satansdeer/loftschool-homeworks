import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div>
                <span className="message">{this.props.text}</span>
            </div>
        );
    }
}

export default Message;