import React from 'react'
import './Message.css'

const Message = (props) => {
    const {text} = props;
    return <span className='message'>{text}</span>
};

export default Message;