// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React, { Component } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';
import styles from '../MailList/MailList.module.css';

class InboxList extends Component {
  render() {
    const {
      match,
      data: { inbox: mailData }
    } = this.props;

    return (
      <div className={styles.container}>
        <MailList mailData={mailData} match={match} />
      </div>
    );
  }
}

export default withData(InboxList);
