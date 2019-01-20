import React, { Component } from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';
import classNames from 'classnames';
import style from '../MailList/MailList.module.css';

class OutboxList extends Component {
    render() {
        const { data: {
            outbox: mailData
        },
            match } = this.props;

        return (
            <div className={classNames(style.container, 't-outbox-list')}>
                <MailList mailData={mailData} match={match} />
            </div>
        )
    }
}

export default withData(OutboxList);