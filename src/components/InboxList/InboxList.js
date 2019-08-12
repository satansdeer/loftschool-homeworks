// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';
import styles from '../MailList/MailList.module.css';
import classNames from 'classnames';

const InboxList = ({ data: { inbox: mailData }, match }) => {
  return (
    <div className={classNames(styles.container, 't-inbox-list')}>
      <MailList mailData={mailData} match={match} />
    </div>
  );
};

export default withData(InboxList);
