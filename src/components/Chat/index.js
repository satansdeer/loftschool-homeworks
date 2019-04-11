import React, { Component, createRef } from 'react';
import Message from '../Message';
import './Chat.css';

const ENTER_KEY = 'Enter';
const EMPTY_STRING = "";

export default class Chat extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      messageInput: EMPTY_STRING
    };

    this.listContainer = createRef();
    this.inputField = createRef();
  }

  componentDidUpdate() {
    const { current } = this.listContainer;

    if (current && current.lastChild) {
      current.lastChild.scrollIntoView({
        block: 'end',
        behavior: 'smooth'
      });
    }
  }

  changeInputMessage = value => {
    const parsedValue = this.getNormalizedValue(value);
    this.setState({
      ...this.state,
      messageInput: parsedValue
    });
  };

  getNormalizedValue = value => {
    return +value ? +value : value;
  };

  sendMessageOnEnter = key => {
    const { messages, messageInput } = this.state;

    if (key === ENTER_KEY && messageInput) {
      const newMessage = { text: messageInput };
      const newMessages = [...messages, newMessage];

      this.setState({
        ...this.state,
        messages: newMessages,
        messageInput: EMPTY_STRING
      });
    }
  };

  render() {
    const { messages } = this.state;
    return (
      <div className="chat" ref={this.listContainer}>
        <input
          className="input-message"
          onChange={({ target: { value } }) => this.changeInputMessage(value)}
          onKeyPress={({ key }) => this.sendMessageOnEnter(key)}
          value={this.state.messageInput}
        />
        {
          messages.map((item, index) => (
            <Message text={item.text} key={`${new Date()}_${index}`} />
          ))}
      </div>
    );
  }
}
