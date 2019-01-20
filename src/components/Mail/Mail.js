import React, { Component } from 'react';
import style from './Mail.module.css';

class Mail extends Component {
    render() {
        const { from, to, body } = this.props,
            type = from ? 'from' : 'to';

        return (
            <div className={style.container}>
                <p className={`t-mail-${type}`}>
                    {type === 'from' ? 'From: ' : 'To: '}
                    <strong>{from || to}</strong>
                </p>
                <p className='t-mail-body'>{body}</p>
            </div>
        )
    }
}

export default Mail