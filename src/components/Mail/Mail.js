// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React, { Component } from 'react';
import styles from './Mail.module.css';

export default class Mail extends Component {
    render() {
        const { from, to, body } = this.props;
        return (
            <div className={styles.container}>
                <>
                    {from && <p className="t-mail-from">From: <b>{from}</b></p>}
                    {to && <p className="t-mail-to">To: <b>{to}</b></p>}
                </>
                <p className="t-mail-body">{body}</p>
            </div>
        );
    }
}
