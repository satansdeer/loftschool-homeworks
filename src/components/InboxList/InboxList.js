import React, { Component } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

class InboxList extends Component {
  render() {
    const { data } = this.props;
    const { pathname } = this.props.location;
    return <MailList data={data.inbox} mod="t-inbox-list" path={pathname} />;
  }
}

export default withData(InboxList);

// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
