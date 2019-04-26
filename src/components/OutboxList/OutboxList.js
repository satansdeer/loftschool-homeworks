import React from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
const OutboxList = ({ data: { outbox }, ...rest }) => {
  return <MailList classes="t-outbox-list" mails={outbox} {...rest} />;
};

export default withData(OutboxList);
