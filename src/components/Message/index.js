import React from 'react';

class Chat extends React.Component {
  render() {
    return (
      <div className="message-list">
        <div className="messages" />
      </div>
      <input className="input-message" value="" type="text" />
    );
  }
}

export { default } from './Message';
