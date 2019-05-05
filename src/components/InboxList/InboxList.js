// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

let InboxList = props => {
  const { data } = props;

  return <MailList data={data.inbox} type="inbox" className="t-inbox-list" />;
};

export default withData(InboxList);
