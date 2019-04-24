// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';
import truncate from 'lodash/truncate';
class InboxList extends PureComponent {
  render() {
    const { data } = this.props;
    const { inbox } = data;
    return (
      <MailList
        className="t-inbox-list"
        mails={inbox.map(({ id, body }) => ({
          title: truncate(body, { length: 55 }),
          link: `/app/inbox/${id}`
        }))}
      />
    );
  }
}

export default withData(InboxList);
