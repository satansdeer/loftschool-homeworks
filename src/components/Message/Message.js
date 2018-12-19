import React from 'react';
import './Message.css';

export default function Message(props) {
  const { text } = props;
  return <span className="message">{text}</span>;
}
