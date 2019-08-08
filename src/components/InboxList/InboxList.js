import React from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';
import classnames from 'classnames';
import styles from '../MailList/MailList.module.css';

// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

const InboxList = ({ data: { inbox: mailData }, match }) => {
    return (
      <div className={classnames(styles.container, 't-inbox-list')}>
        <MailList mailData={mailData} match={match} />
      </div>
    );
  };
  
  export default withData(InboxList); 