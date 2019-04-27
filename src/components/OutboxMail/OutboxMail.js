// Реализуйте компонент OutboxMail по примеру InboxMail.
// Он должен показывать выбранное письмо на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.
import React from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

// Этот компонент должен использовать компонент Mail для отображения данных.
const OutboxMail = props => {
  const {
    match: {
      params: { id }
    },
    data: { outbox }
  } = props;

  return <Mail classes="t-mail-to" {...outbox.find(mail => mail.id === id)} />;
};

export default withData(OutboxMail);
