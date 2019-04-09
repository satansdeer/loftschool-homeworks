import React from 'react';
import ReactDOM from 'react-dom';
import './Message.css'

export default class Message extends React.Component {
	render() {
		return (
			this.props.text.map((item, index) => (
				        <span key={index} className="message">{item}</span>
				    ))
			)
	}
}