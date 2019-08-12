// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

let OutboxList = props => {
  const { data } = props;

  return (
    <MailList data={data.outbox} type="outbox" className="t-outbox-list" />
  );
};

export default withData(OutboxList);
