import React from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
const InboxList = ({ data: { inbox }, ...rest }) => {
  return <MailList classes="t-inbox-list" mails={inbox} {...rest} />;
};

export default withData(InboxList);
