// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';

export default class MailList extends Component {
    renderMail(mail) {
        const { match } = this.props;
        const tilte = mail.body.slice(0, 50);
        return (
            <Link 
                className={styles.link}
                key={mail.id}
                to={`${match.url}/${mail.id}`}
            >
                {`${tilte}...`}
            </Link>
        );
    }

    render() {
        const { mailData } = this.props;
        return mailData.map(mail => this.renderMail(mail));
    }
}
