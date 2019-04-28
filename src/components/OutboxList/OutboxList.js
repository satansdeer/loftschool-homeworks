// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React, { Component } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';
import styles from '../MailList/MailList.module.css';

class OutboxList extends Component {
  render() {
    const {
      match,
      data: { outbox: mailData }
    } = this.props;

    return (
      <div className={styles.container}>
        <MailList mailData={mailData} match={match} />
      </div>
    );
  }
}

export default withData(OutboxList);
