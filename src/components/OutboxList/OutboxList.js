// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';
import truncate from 'lodash/truncate';
class OutboxList extends PureComponent {
  render() {
    const { data } = this.props;
    const { outbox } = data;

    return (
      <MailList
        className="t-inbox-list"
        mails={outbox.map(({ id, body }) => ({
          title: truncate(body, { length: 55 }),
          link: `/app/outbox/${id}`
        }))}
      />
    );
  }
}

export default withData(OutboxList);
