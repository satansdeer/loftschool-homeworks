import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './MailList.module.css';

class MailList extends Component {
    render() {
        const { mailData, match } = this.props;

        return (
            mailData.map(mail => {
                return (
                    <Link
                        key={mail.id}
                        className={style.link}
                        to={`${match.url}/${mail.id}`}>
                        {`${mail.body.slice(0, 50)}...`}
                    </Link>
                )
            })
        )
    }
}

export default MailList;